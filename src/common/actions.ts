//Actions
export enum TodosActions {
  //Load Actions
  LOAD_TODOS = 'LOAD_TODOS',
  TODOS_LOADED = 'TODOS_LOADED',
  ERROR_LOADING_TODOS = 'ERROR_LOADING_TODOS',
  //Add Actions
  ADD_TODO = 'ADD_TODO',
  TODO_ADDED = 'TODO_ADDED',
  ERROR_ADDING_TODO = 'ERROR_ADDING_TODO',
  //Update actions
  UPDATE_TODO = 'UPDATE_TODO',
  TODO_UPDATED = 'TODO_UPDATED',
  ERROR_UPDATING_TODO = 'ERROR_UPDATING_TODO',
  //Delete actions
  DELETE_TODO = 'DELETE_TODO',
  TODO_DELETED = 'TODO_DELETED',
  ERROR_DELETING_TODO = 'ERROR_DELETING_TODO',
}

export enum FilterActions {
  //Filter actions
  SET_SHOW_ALL_FILTER = 'SET_SHOW_ALL_FILTER',
  SET_SHOW_COMPLETE_FILTER = 'SET_SHOW_COMPLETE_FILTER',
  SET_SHOW_INCOMPLETE_FILTER = 'SET_SHOW_INCOMPLETE_FILTER',
}