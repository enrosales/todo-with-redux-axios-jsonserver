import React, { useEffect } from 'react';
//Components
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import FilterList from '../FilterList';
import Error from '../Error';

export default function AppLayout(props: any) {
  const { getTodos } = props;
  useEffect(() => {
    getTodos();
  }, [getTodos]);
  return (
    <>
      <Error />
      <AddTodo />
      <TodoList />
      <FilterList />
    </>
  );
}
