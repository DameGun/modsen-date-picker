import { ComponentType, useContext, useEffect, useState } from 'react';
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

    const addTodo = (newItem: TodoItem) => {
      const currentDateTodos = todos[inputValue] ?? [];
      setTodos({ ...todos, [inputValue]: [...currentDateTodos, newItem] });
    };

    const updateTodo = (updatedItem: TodoItem) => {
      setTodos({
        ...todos,
        [inputValue]: todos[inputValue].map((item) => {
          if (item.id === updatedItem.id) {
            item = Object.assign({}, item, updatedItem);
          }
          return item;
        }),
      });
    };

    const deleteTodo = (id: string) => {
      setTodos({
        ...todos,
        [inputValue]: todos[inputValue].filter((item) => item.id !== id),
      });
    };

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
