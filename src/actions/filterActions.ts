import { Filter } from '../constants/filters';
import { FilterActions } from '../common/actions';

export const showAll = () => (dispatch: any): void => {
  return dispatch({
    type: FilterActions.SET_SHOW_ALL_FILTER,
    payload: Filter.SHOW_ALL,
  });
};

export const showComplete = () => (dispatch: any): void => {
  return dispatch({
    type: FilterActions.SET_SHOW_COMPLETE_FILTER,
    payload: Filter.SHOW_COMPLETE,
  });
};

export const showIncomplete = () => (dispatch: any): void => {
  console.log('entro aqui');
  return dispatch({
    type: FilterActions.SET_SHOW_INCOMPLETE_FILTER,
    payload: Filter.SHOW_INCOMPLETE,
  });
};
