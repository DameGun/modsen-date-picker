type TodoItem = {
  id: string;
  content: string;
  isComplete: boolean;
};

type TodoItemsCollection = {
  [key: string]: TodoItem[];
};

export type { TodoItem, TodoItemsCollection };
