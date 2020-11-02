import { TodosActions } from './actions';
import { Todo } from '../components/TodoItem/types';

// Common Types
export type LoadTodos = {
  type: TodosActions.LOAD_TODOS;
};

export type TodosLoaded = {
  type: TodosActions.TODOS_LOADED;
  payload: Todo[];
};

export type ErrorLoadingTodos = {
  type: TodosActions.ERROR_LOADING_TODOS;
  payload: string;
};

export type AddTodo = {
  type: TodosActions.ADD_TODO;
};

export type TodoAdded = {
  type: TodosActions.TODO_ADDED;
  payload: Todo;
};

export type ErrorAddingTodo = {
  type: TodosActions.ERROR_ADDING_TODO;
  payload: string;
};

export type UpdateTodo = {
  type: TodosActions.UPDATE_TODO;
};

export type TodoUpdated = {
  type: TodosActions.TODO_UPDATED;
  payload: Todo;
};

export type ErrorUpdatingTodo = {
  type: TodosActions.ERROR_UPDATING_TODO;
  payload: string;
};

export type DeleteTodo = {
  type: TodosActions.DELETE_TODO;
};

export type TodoDeleted = {
  type: TodosActions.TODO_DELETED;
  payload: Todo;
};

export type ErrorDeletingTodo = {
  type: TodosActions.ERROR_DELETING_TODO;
  payload: string;
};
