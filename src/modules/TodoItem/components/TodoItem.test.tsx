import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';
import { Todo } from '../types';

const setup = (todo: Todo) => {
  const actions = {
    setComplete: jest.fn(),
    deleteTodo: jest.fn(),
  };

  const component = shallow(<TodoItem todo={todo} {...actions} />);

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    p: component.find('p'),
    check: component.find('input'),
  };
};

describe('TodoItem component', () => {
  const todo = { id: 1, text: 'Hello', done: true };
  it('render the p element', () => {
    const { p } = setup(todo);
    expect(p).toBeDefined();
  });
  it('render the button element', () => {
    const { button } = setup(todo);
    expect(button).toBeDefined();
  });
  it('should display the todo text', () => {
    const { p } = setup(todo);
    expect(p.text()).toMatch(/Hello/);
  });
  it('should display the input checkbox marked', () => {
    const { check } = setup(todo);
    expect(check.prop('checked')).toEqual(true);
  });
  it('should call action on checkbox click', () => {
    const { check, actions } = setup(todo);
    check.simulate('change');
    expect(actions.setComplete).toBeCalledTimes(1);
  });
  it('should call action on button click', () => {
    const { button, actions } = setup(todo);
    button.simulate('click');
    expect(actions.deleteTodo).toBeCalledTimes(1);
  });
});
