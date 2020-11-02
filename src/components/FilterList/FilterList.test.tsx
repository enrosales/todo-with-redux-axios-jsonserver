import React from 'react';
import { mount } from 'enzyme';
import FilterList from '../components';

const setup = () => {
  const actions = {
    showAll: jest.fn(),
    showComplete: jest.fn(),
    showIncomplete: jest.fn(),
  };
  const wrapper = mount(<FilterList {...actions} />);
  return {
    wrapper: wrapper,
    button: wrapper.find('button'),
    actions: actions,
  };
};

describe('FilterList component', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toBeDefined();
  });
  it('render the button elements', () => {
    const { button } = setup();
    expect(button.at(0).text()).toEqual('Show All');
    expect(button.at(1).text()).toEqual('Show Complete');
    expect(button.at(2).text()).toEqual('Show Incomplete');
  });
  describe('must call to its methods each button', () => {
    const { button, actions } = setup();
    button.at(0).simulate('click');
    expect(actions.showAll).toHaveBeenCalledTimes(1);
    button.at(1).simulate('click');
    expect(actions.showComplete).toHaveBeenCalledTimes(1);
    button.at(2).simulate('click');
    expect(actions.showIncomplete).toHaveBeenCalledTimes(1);
  });
});
