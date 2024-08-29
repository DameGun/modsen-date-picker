import { TodoItem } from '@/types/todo';

export function getTodoListLastItemContent(items?: TodoItem[]) {
  if (items && items.length > 0) {
    return items[items.length - 1].content;
  }

  return 'No todos';
}

export const getIdBasedOnTimestamp = () => Date.now().toString(36);
