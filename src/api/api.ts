import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_URL } from '../constants/api';
import { Todo } from '../modules/TodoItem/types';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const getTodos = (): Promise<AxiosResponse<Todo[]>> => api.get('todos');

export const addTodo = (todo: Todo): Promise<AxiosResponse<Todo>> =>
  api.post('todos', todo);

export const deleteTodo = (id: number): Promise<AxiosResponse> =>
  api.delete(`todos/${id}`);

export const updateTodo = (todo: Todo): Promise<AxiosResponse<Todo>> =>
  api.patch(`todos/${todo.id}`, todo);
