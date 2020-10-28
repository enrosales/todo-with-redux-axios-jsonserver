import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//Components
import AddTodo from '../../AddTodo/components';
import TodoList from '../../TodoList/components';
import FilterList from '../../FilterList/components';
//Actions
import { getTodos } from '../../../actions/todosAction';

type Props = {
  getTodos: () => void;
};

function App(props: Props) {
  const { getTodos } = props;
  useEffect(() => {
    const loadData = async () => {
      await getTodos();
    };
    loadData();
  }, []);
  return (
    <>
      <AddTodo />
      <TodoList />
      <FilterList />
    </>
  );
}

const mapDispatchToProps = {
  getTodos,
};

export default connect(null, mapDispatchToProps)(App);
