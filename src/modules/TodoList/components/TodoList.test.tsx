import React from 'react';
import { mount } from 'enzyme';
import { Todo } from '../../TodoItem/types';
import TodoList from './TodoList';
import TodoItem from '../../TodoItem/components';

const setup = (todos: Todo[]) => {
  const component = mount(<TodoList todos={todos} />);
  return {
    component: component,
    p: component.find('p'),
  };
};

describe('TodoList component', () => {
  const todos = [
    { id: 1, text: 'Hello1', done: true },
    { id: 2, text: 'Hello2', done: false },
  ];
  it('should display two TodoItems', () => {
    const { component } = setup(todos);
    expect(component.find(TodoItem)).toHaveLength(2);
  });
  it('should display 0 TodoItems', () => {
    const { component } = setup([]);
    expect(component.find(TodoItem)).toHaveLength(0);
  });
  it('it render "Nothing todo..." message', () => {
    const { p } = setup([]);
    expect(p.text()).toMatch(/Nothing todo.../);
  });
});
