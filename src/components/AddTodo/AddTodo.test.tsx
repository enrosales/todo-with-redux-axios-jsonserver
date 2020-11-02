import React from 'react';
import { mount } from 'enzyme';
import { Todo } from '../../TodoItem/types';
import AddTodo from '../components/AddTodo';

const setup = () => {
  const actions = {
    addTodo: jest.fn(),
  };
  const wrapper = mount(<AddTodo {...actions} />);
  return {
    wrapper: wrapper,
    button: wrapper.find('button'),
    input: wrapper.find('input'),
    form: wrapper.find('form'),
    actions: actions,
  };
};

describe('AddTodo component', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toBeDefined();
  });
  it('render the input element', () => {
    const { input } = setup();
    expect(input).toBeDefined();
  });
  it('render the button element', () => {
    const { button } = setup();
    expect(button).toBeDefined();
  });
  it('render the form element', () => {
    const { form } = setup();
    expect(form).toBeDefined();
  });

  it('must submit the todoForm', () => {
    const { wrapper, actions, input, form, button } = setup();
    input.simulate('change', { target: { value: 'eduardo' } });
    wrapper.update();
    form.simulate('submit', { preventDefault: () => {} });
    expect(actions.addTodo).toHaveBeenCalledTimes(1);
    button.simulate('click', { preventDefault: () => {} });
    expect(actions.addTodo).toHaveBeenCalledTimes(1);
  });
});
