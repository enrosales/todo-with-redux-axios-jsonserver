import { Filter } from '../constants/filters';
import { Actions } from '../constants/actions';

export const showAll = () => (dispatch: any) => {
  return dispatch({
    type: Actions.SET_SHOW_ALL_FILTER,
    payload: Filter.SHOW_ALL,
  });
};

export const showComplete = () => (dispatch: any) => {
  return dispatch({
    type: Actions.SET_SHOW_COMPLETE_FILTER,
    payload: Filter.SHOW_COMPLETE,
  });
};

export const showIncomplete = () => (dispatch: any) => {
  return dispatch({
    type: Actions.SET_SHOW_INCOMPLETE_FILTER,
    payload: Filter.SHOW_INCOMPLETE,
  });
};
