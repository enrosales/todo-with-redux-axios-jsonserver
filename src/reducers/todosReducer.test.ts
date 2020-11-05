import { TodosActions } from '../common/actions';
import { Todo } from '../components/TodoItem/types';
import { Filter } from '../constants/filters';
import todosReducer from './index';

const todos: Todo[] = [];
const initialState = {
  todos: {
    items: todos,
    filteredItems: todos,
    filter: Filter.SHOW_ALL,
    error: '',
  },
};

describe('todosReducer', () => {
  it('should provide the initial state', () => {
    expect(
      todosReducer(initialState, {
        payload: null,
        type: TodosActions.ADD_TODO,
      })
    ).toStrictEqual(initialState);
  });
  it('should ignore unknown actions', () => {
    expect(
      todosReducer(initialState, {
        payload: null,
        type: 'Test' as TodosActions,
      })
    ).toStrictEqual(initialState);
  });
  it('should handle TODOS_LOADED action', () => {
    const todos = [
      { id: 1, text: 'Todo1', done: true },
      { id: 2, text: 'Todo2', done: false },
    ];
    const expectedState = {
      todos: {
        items: todos,
        filteredItems: todos,
        filter: Filter.SHOW_ALL,
        error: '',
      },
    };
    expect(
      todosReducer(initialState, {
        payload: todos,
        type: TodosActions.TODOS_LOADED,
      })
    ).toStrictEqual(expectedState);
  });
  it('should handle ERROR_LOADING_TODOS action', () => {
    const expectedState = {
      todos: {
        items: [],
        filteredItems: [],
        filter: Filter.SHOW_ALL,
        error: 'Error loading todos',
      },
    };
    expect(
      todosReducer(initialState, {
        payload: 'Error loading todos',
        type: TodosActions.ERROR_LOADING_TODOS,
      })
    ).toStrictEqual(expectedState);
  });
  it('should handle TODO_ADDED action', () => {
    const newTodo = { id: 1, text: 'New Todo', done: false };
    const expectedState = {
      todos: {
        items: [newTodo],
        filteredItems: [newTodo],
        filter: Filter.SHOW_ALL,
        error: '',
      },
    };
    expect(
      todosReducer(initialState, {
        payload: newTodo,
        type: TodosActions.TODO_ADDED,
      })
    ).toStrictEqual(expectedState);
  });
});
