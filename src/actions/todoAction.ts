import { Dispatch } from 'redux';
//Actions
import { TodosActions } from '../common/actions';
//Specific Types
import { Todo } from '../components/TodoItem/types';
//Common Types
import {
  AddTodo,
  DeleteTodo,
  ErrorAddingTodo,
  ErrorDeletingTodo,
  ErrorLoadingTodos,
  ErrorUpdatingTodo,
  LoadTodos,
  TodoAdded,
  TodoDeleted,
  TodoUpdated,
  TodosLoaded,
  UpdateTodo,
} from '../common/types';
//API
import * as API from '../api/api';

// action creators
//Load actions
export const loadTodosAction = (): LoadTodos => ({
  type: TodosActions.LOAD_TODOS,
});

export const todosLoadedAction = (todos: Todo[]): TodosLoaded => ({
  type: TodosActions.TODOS_LOADED,
  payload: todos,
});

export const errorLoadingTodosAction = (error: string): ErrorLoadingTodos => ({
  type: TodosActions.ERROR_LOADING_TODOS,
  payload: error,
});

//Add Actions
export const addTodoAction = (): AddTodo => ({
  type: TodosActions.ADD_TODO,
});

export const todoAddedAction = (todo: Todo): TodoAdded => ({
  type: TodosActions.TODO_ADDED,
  payload: todo,
});

export const errorAddingTodoAction = (error: string): ErrorAddingTodo => ({
  type: TodosActions.ERROR_ADDING_TODO,
  payload: error,
});

//Update Actions
export const updateTodoAction = (): UpdateTodo => ({
  type: TodosActions.UPDATE_TODO,
});

export const todoUpdatedAction = (todo: Todo): TodoUpdated => ({
  type: TodosActions.TODO_UPDATED,
  payload: todo,
});

export const errorUpdatingTodoAction = (error: string): ErrorUpdatingTodo => ({
  type: TodosActions.ERROR_UPDATING_TODO,
  payload: error,
});

//Delete Actions
export const deleteTodoAction = (): DeleteTodo => ({
  type: TodosActions.DELETE_TODO,
});

export const todoDeletedAction = (todo: Todo): TodoDeleted => ({
  type: TodosActions.TODO_DELETED,
  payload: todo,
});

export const errorDeletingTodoAction = (error: string): ErrorDeletingTodo => ({
  type: TodosActions.ERROR_DELETING_TODO,
  payload: error,
});

// Thunk async actions
export const getTodos = () => async (
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    dispatch(loadTodosAction());
    const { data: todos } = await API.getTodos();
    dispatch(todosLoadedAction(todos));
  } catch (error) {
    dispatch(errorLoadingTodosAction(error.message));
  }
};

export const addTodo = (todo: Todo) => async (
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    dispatch(addTodoAction());
    const { data: _todo } = await API.addTodo(todo);
    dispatch(todoAddedAction(_todo));
  } catch (error) {
    dispatch(errorAddingTodoAction(error.message));
  }
};

export const updateTodo = (todo: Todo) => async (
  dispatch: any
): Promise<void> => {
  try {
    dispatch(updateTodoAction());
    const { data: _todo } = await API.updateTodo(todo);
    dispatch(todoUpdatedAction(_todo));
  } catch (error) {
    dispatch(errorUpdatingTodoAction(error.message));
  }
};

export const deleteTodo = (todoId: number) => async (
  dispatch: any
): Promise<void> => {
  try {
    dispatch(deleteTodoAction());
    const { data: todo } = await API.deleteTodo(todoId);
    dispatch(todoDeletedAction(todo));
  } catch (error) {
    dispatch(errorDeletingTodoAction(error.message));
  }
};
