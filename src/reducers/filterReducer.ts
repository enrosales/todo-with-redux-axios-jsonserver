//Actions
import { FilterActions } from '../common/actions';
//Filters
import { Filter } from '../constants/filters';

const initialState = Filter.SHOW_ALL;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FilterActions.SET_SHOW_ALL_FILTER:
    case FilterActions.SET_SHOW_COMPLETE_FILTER:
    case FilterActions.SET_SHOW_INCOMPLETE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
