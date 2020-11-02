import { TodosActions } from '../common/actions';
import { Todo } from '../components/TodoItem/types';
import { Filter } from '../constants/filters';

const todos: Todo[] = [];
const initialState = {
  items: todos,
  filteredItems: todos,
  filter: Filter.SHOW_ALL,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case TodosActions.TODOS_LOADED:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case TodosActions.TODO_ADDED:
      const newTodo: Todo = action.payload; //text: 132 done: false id: 0.123
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
      let items = [...state.items].map(t => {
        if (t.id === todoUpdated.id) return todoUpdated;
        return t;
      });
      let filteredItems = [...state.filteredItems].map(t => {
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
    default:
      return state;
  }
}
