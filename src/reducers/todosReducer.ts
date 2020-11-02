import { TodosActions } from '../common/actions';
import { Todo } from '../components/TodoItem/types';

const initialState: Todo[] = [];

export default function (state = initialState, action: any) {
  switch (action.type) {
    case TodosActions.TODOS_LOADED:
      return action.payload;
    case TodosActions.TODO_ADDED:
      const newTodo = action.payload;
      const newState = [...state, newTodo];
      return newState;
    case TodosActions.TODO_UPDATED:
      const todosCopy = [...state];
      const todoUpdated: Todo = action.payload;
      const indexOfTodoToUpdate = todosCopy.findIndex(
        t => t.id === todoUpdated.id
      );
      if (indexOfTodoToUpdate > -1) {
        todosCopy[indexOfTodoToUpdate] = todoUpdated;
        return todosCopy;
      }
      return state;
    case TodosActions.TODO_DELETED:
      const todoDeletedId = action.payload;
      return state.filter(t => t.id !== todoDeletedId);
    default:
      return state;
  }
}
