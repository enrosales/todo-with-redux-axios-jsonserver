import * as types from '../common/actions';
import * as actions from '../actions/todoAction';
//Axios
import axios from 'axios';
//Imports for Async Action Creators
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

//Variables for async Actions creators
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('todoActions', () => {
  describe('Action creators', () => {
    it('loadTodosAction: should create an action before loadTodos', () => {
      const expectedAction = {
        type: types.TodosActions.LOAD_TODOS,
      };
      expect(actions.loadTodosAction()).toEqual(expectedAction);
    });
    it('todosLoadedAction: should create an action when todosLoaded', () => {
      const todo = { id: 1, text: 'Todo1', done: false };
      const expectedAction = {
        type: types.TodosActions.TODOS_LOADED,
        payload: [todo],
      };
      expect(actions.todosLoadedAction([todo])).toEqual(expectedAction);
    });
    it('errorLoadingTodosAction: should create an action when an error happened', () => {
      const error = 'Error';
      const expectedAction = {
        type: types.TodosActions.ERROR_LOADING_TODOS,
        payload: error,
      };
      expect(actions.errorLoadingTodosAction(error)).toEqual(expectedAction);
    });
  });
  describe('Async Actions creators', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('creates TODOS_LOADED when fetching todos has been done', async () => {
      // const responseCompanies = { data: companies };
      const responseTodos = {
        data: [
          { id: 1, text: 'todo1', done: false },
          { id: 2, text: 'todo2', done: true },
        ],
      };
      jest
        .spyOn(axios, 'get')
        .mockImplementation()
        .mockResolvedValueOnce(responseTodos);

      const expectedAction = [
        actions.loadTodosAction(),
        actions.todosLoadedAction(responseTodos.data),
      ];
      const store = mockStore({});
      return store.dispatch<any>(actions.getTodos()).then(() => {
        //return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
