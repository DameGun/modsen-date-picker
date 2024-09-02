import { useMemo, useState } from 'react';
import { closeIcon, todolistIcon } from '@/assets/icons';
import { AddTodoItem, IconButton, TodoListItem } from '@/components';
import type { TodoItem } from '@/types/todo';
import { getTodoListLastItemContent } from '@/utils/todoList';
import { TodoListContainer, TodoListHeader, TodoListWrapper } from './styled';
import type { AddTodoItemProps } from '../AddTodoItem';
import type { TodoListItemActions } from '../TodoListItem';

interface TodoListProps extends AddTodoItemProps, TodoListItemActions {
  selectedDate: string;
  todoItems?: TodoItem[];
}

export default function TodoList({
  selectedDate,
  todoItems,
  addTodo,
  ...todoItemActions
}: TodoListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formattedDate = useMemo(
    () => new Date(selectedDate).toLocaleDateString('en-US', { dateStyle: 'long' }),
    [selectedDate]
  );
  const lastTodoInfoBar = useMemo(() => getTodoListLastItemContent(todoItems), [todoItems]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <TodoListHeader>
        <p>
          <i>{lastTodoInfoBar}</i>
        </p>
        <IconButton
          icon={todolistIcon}
          onClick={handleOpen}
          isUnavaliable={!selectedDate}
          testid='todolist-button'
        />
      </TodoListHeader>
      {isOpen && (
        <TodoListWrapper>
          <TodoListHeader>
            <p>{formattedDate}</p>
            <IconButton icon={closeIcon} onClick={handleClose} />
          </TodoListHeader>
          <AddTodoItem addTodo={addTodo} />
          <TodoListContainer>
            {todoItems &&
              todoItems.map((item) => (
                <TodoListItem key={item.id} item={item} {...todoItemActions} />
              ))}
          </TodoListContainer>
        </TodoListWrapper>
      )}
    </>
  );
}
