import { Todo } from '../modules/TodoItem/types';
import { Actions } from '../constants/actions';
import * as API from '../api/api';

export const getTodos = () => async (dispatch: any): Promise<void> => {
  const { data: todos } = await API.getTodos();
  return dispatch({ type: Actions.FETCH_TODOS, payload: todos });
};

export const addTodo = (todos: Todo[], todo: Todo) => async (dispatch: any) => {
  await API.addTodo(todo);
  const _todos = [...todos];
  _todos.push(todo);
  return dispatch({
    type: Actions.ADD_TODO,
    payload: _todos,
  });
};

export const updateTodo = (todo: Todo) => async (
  dispatch: any
): Promise<void> => {
  await API.updateTodo(todo);
  return dispatch({ type: Actions.UPDATE_TODO, payload: todo });
};

export const deleteTodo = (todoId: number) => async (
  dispatch: any
): Promise<void> => {
  await API.deleteTodo(todoId);
  return dispatch({ type: Actions.DELETE_TODO, payload: todoId });
};
