import { ComponentType, useCallback, useContext, useEffect, useState } from 'react';
import { TodoList } from '@/components';
import { TODOS_STORAGE_KEY } from '@/constants/todos';
import type { CalendarProps } from '@/types/calendar';
import type { TodoItem, TodoItemsCollection } from '@/types/todo';
import { DatePickerContext } from '../context/datePickerContext';

export default function withTodoList(WrappedComponent: ComponentType<CalendarProps>) {
  const TodoListPicker = (props: CalendarProps) => {
    const { inputValue } = useContext(DatePickerContext);
    const [todos, setTodos] = useState<TodoItemsCollection>({});

    useEffect(() => {
      const storageItems = localStorage.getItem(TODOS_STORAGE_KEY);

      if (storageItems) {
        setTodos(JSON.parse(storageItems));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = useCallback(
      (newItem: TodoItem) =>
        setTodos((prevTodos) => ({
          ...prevTodos,
          [inputValue]: [...(prevTodos[inputValue] ?? []), newItem],
        })),
      [inputValue]
    );

    const updateTodo = useCallback(
      (updatedItem: TodoItem) =>
        setTodos((prevTodos) => ({
          ...prevTodos,
          [inputValue]: prevTodos[inputValue].map((item) => {
            if (item.id === updatedItem.id) {
              item = Object.assign({}, item, updatedItem);
            }
            return item;
          }),
        })),
      [inputValue]
    );

    const deleteTodo = useCallback(
      (id: string) =>
        setTodos((prevTodos) => ({
          ...prevTodos,
          [inputValue]: prevTodos[inputValue].filter((item) => item.id !== id),
        })),
      [inputValue]
    );

    return (
      <WrappedComponent {...props}>
        <TodoList
          selectedDate={inputValue}
          todoItems={todos[inputValue]}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </WrappedComponent>
    );
  };

  return TodoListPicker;
}
