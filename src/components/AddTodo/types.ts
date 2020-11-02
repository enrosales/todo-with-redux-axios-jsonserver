import { Todo } from '../TodoItem/types';
import { Dispatch } from 'redux';

export type Props = {
  addTodo: (todo: Todo) => (dispatch: Dispatch<any>) => Promise<void>;
};
