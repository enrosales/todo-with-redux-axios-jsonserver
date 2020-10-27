export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type Props = {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
};
