import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { TODOS_STORAGE_KEY } from '@/constants/todos';
import DatePickerCreator from '@/services/datePickerCreator';
import type { TodoItemsCollection } from '@/types';

describe('TodoList Integration Tests', () => {
  beforeEach(async () => {
    localStorage.clear();

    renderDatePicker();
    const datePickerInput = screen.getByTestId('date-picker-input');
    fireEvent.click(datePickerInput);

    const calendarItem = screen.getAllByText('1')[0];
    fireEvent.click(calendarItem);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/01/i)).toBeInTheDocument();
    });

    const todoListButton = screen.getByTestId('todolist-button');
    fireEvent.click(todoListButton);
  });

  const renderDatePicker = () => {
    return render(
      <DatePickerCreator type={CalendarType.Date} weekStartDay={WeekStartDay.Monday} withTodoList />
    );
  };

  test('adds a new todo item', async () => {
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: 'New Todo Item' } });

    const addButton = screen.getByTestId('add-todo-button');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    });

    const storedTodos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) || '{}');
    expect(Object.values(storedTodos)[0]).toHaveLength(1);
  });

  test('updates a todo item', async () => {
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: 'Todo to update' } });
    const addButton = screen.getByTestId('add-todo-button');
    fireEvent.click(addButton);

    const todoInput = await screen.findByDisplayValue('Todo to update');
    fireEvent.change(todoInput, { target: { value: 'Updated Todo' } });
    fireEvent.blur(todoInput);

    await waitFor(() => {
      expect(screen.getByDisplayValue('Updated Todo')).toBeInTheDocument();
    });

    const storedTodos = JSON.parse(
      localStorage.getItem(TODOS_STORAGE_KEY) || '{}'
    ) as TodoItemsCollection;
    expect(Object.values(storedTodos)[0][0].content).toBe('Updated Todo');
  });

  test('deletes a todo item', async () => {
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    const addButton = screen.getByTestId('add-todo-button');
    fireEvent.click(addButton);

    const deleteButton = await screen.findByTestId('delete-todo-button');
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
    });

    const storedTodos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) || '{}');
    expect(Object.values(storedTodos)[0]).toHaveLength(0);
  });
});
