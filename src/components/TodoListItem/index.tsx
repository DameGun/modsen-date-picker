import { ChangeEvent, useState } from 'react';
import { deleteIcon } from '@/assets/icons';
import { IconButton } from '@/components';
import { TODO_CONTENT_LENGTH_LIMIT } from '@/constants/todos';
import type { TodoItem } from '@/types/todo';
import { TodoListItemCheckbox, TodoListItemContainer, TodoListItemInput } from './styled';

interface TodoListItemProps extends TodoListItemActions {
  item: TodoItem;
}

export interface TodoListItemActions {
  updateTodo(updatedTodo: TodoItem): void;
  deleteTodo(id: string): void;
}

export default function TodoListItem({ item, updateTodo, deleteTodo }: TodoListItemProps) {
  const [content, setContent] = useState(item.content);

  const handleUpdateStatus = () => {
    const newTodo: TodoItem = { ...item, isComplete: !item.isComplete };
    updateTodo(newTodo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= TODO_CONTENT_LENGTH_LIMIT) setContent(e.target.value);
  };

  const handleUpdateContent = () => {
    const newTodo: TodoItem = { ...item, content };
    updateTodo(newTodo);
  };

  const handleDelete = () => deleteTodo(item.id);

  return (
    <TodoListItemContainer>
      <TodoListItemCheckbox defaultChecked={item.isComplete} onClick={handleUpdateStatus} />
      <TodoListItemInput value={content} onChange={handleChange} onBlur={handleUpdateContent} />
      <IconButton icon={deleteIcon} onClick={handleDelete} />
    </TodoListItemContainer>
  );
}
