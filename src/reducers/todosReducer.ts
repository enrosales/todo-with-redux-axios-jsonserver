import { TodosActions, FilterActions } from '../common/actions';
import { Todo } from '../components/TodoItem/types';
import { Filter } from '../constants/filters';

type State = {
  items: Todo[];
  filteredItems: Todo[];
  filter: Filter;
  error: string;
};

type Action = {
  payload: any;
  type: TodosActions | FilterActions;
};

const todos: Todo[] = [];
const initialState = {
  items: todos,
  filteredItems: todos,
  filter: Filter.SHOW_ALL,
  error: '',
};

export default function (state = initialState, action: Action): State {
  let items, filteredItems;
  switch (action.type) {
    case TodosActions.TODOS_LOADED:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case TodosActions.ERROR_LOADING_TODOS:
    case TodosActions.ERROR_ADDING_TODO:
    case TodosActions.ERROR_DELETING_TODO:
    case TodosActions.ERROR_UPDATING_TODO:
      return { ...state, error: action.payload };
    case TodosActions.TODO_ADDED:
      const newTodo: Todo = action.payload;
      const filterValid =
        state.filter === Filter.SHOW_ALL ||
        state.filter === Filter.SHOW_INCOMPLETE;
      if (filterValid) {
        //Adding to items and filteredItems
        return {
          ...state,
          items: state.items.concat(newTodo),
          filteredItems: state.filteredItems.concat(newTodo),
        };
      }
      //Only added to the items
      return { ...state, items: state.items.concat(newTodo) };
    case TodosActions.TODO_UPDATED:
      const todoUpdated: Todo = action.payload;
      items = [...state.items].map(t => {
        if (t.id === todoUpdated.id) return todoUpdated;
        return t;
      });
      filteredItems = [...state.filteredItems].map(t => {
        if (t.id === todoUpdated.id) return todoUpdated;
        return t;
      });
      return { ...state, items, filteredItems };
    case TodosActions.TODO_DELETED:
      const todoDeletedId = action.payload;
      items = [...state.items].filter(t => t.id !== todoDeletedId);
      filteredItems = [...state.filteredItems].filter(
        t => t.id !== todoDeletedId
      );
      return { ...state, items, filteredItems };
    case FilterActions.SET_SHOW_ALL_FILTER:
      return {
        ...state,
        filteredItems: [...state.items],
        filter: action.payload,
      };
    case FilterActions.SET_SHOW_COMPLETE_FILTER:
      return {
        ...state,
        filteredItems: [...state.items].filter(t => t.done === true),
        filter: action.payload,
      };
    case FilterActions.SET_SHOW_INCOMPLETE_FILTER:
      return {
        ...state,
        filteredItems: [...state.items].filter(t => t.done === false),
        filter: action.payload,
      };
    default:
      return state;
  }
}
