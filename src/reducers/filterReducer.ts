//Actions
import { Actions } from '../constants/actions';
//Filters
import { Filter } from '../constants/filters';

const initialState = Filter.SHOW_ALL;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SET_SHOW_ALL_FILTER:
    case Actions.SET_SHOW_COMPLETE_FILTER:
    case Actions.SET_SHOW_INCOMPLETE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
