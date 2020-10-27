import { Todo } from '../TodoItem/types';

export type Props = {
  todos: Todo[];
  addTodo: (todos: Todo[], todo: Todo) => void;
};
