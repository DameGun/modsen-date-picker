import { ChangeEvent, useState } from 'react';
import { plusIcon } from '@/assets/icons';
import { IconButton, StyledInput } from '@/components';
import { TODO_CONTENT_LENGTH_LIMIT } from '@/constants/todos';
import type { TodoItem } from '@/types/todo';
import { getIdBasedOnTimestamp } from '@/utils/todoList';
import AddTodoItemContainer from './styled';

export interface AddTodoItemProps {
  addTodo(newItem: TodoItem): void;
}

export default function AddTodoItem({ addTodo }: AddTodoItemProps) {
  const [content, setContent] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= TODO_CONTENT_LENGTH_LIMIT) setContent(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: TodoItem = { id: getIdBasedOnTimestamp(), content, isComplete: false };
    addTodo(newTodo);
    setContent('');
  };

  return (
    <AddTodoItemContainer>
      <StyledInput value={content} onChange={handleChange} data-testid='add-todo-input' />
      <IconButton
        icon={plusIcon}
        onClick={handleAddTodo}
        isUnavaliable={!content}
        testid='add-todo-button'
      />
    </AddTodoItemContainer>
  );
}
