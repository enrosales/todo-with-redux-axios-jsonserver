import { Actions } from '../constants/actions';
import { Todo } from '../modules/TodoItem/types';

const initialState: Todo[] = [];

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.FETCH_TODOS:
      return action.payload;
    case Actions.UPDATE_TODO:
      const todosCopy = [...state];
      const indexOfTodoToUpdate = todosCopy.findIndex(
        t => t.id === action.payload.id
      );
      if (indexOfTodoToUpdate > -1) {
        todosCopy[indexOfTodoToUpdate] = action.payload;
        return todosCopy;
      }
      return state;
    case Actions.DELETE_TODO:
      return state.filter(t => t.id !== action.payload);
    case Actions.ADD_TODO:
      return action.payload;
    default:
      return state;
  }
}
