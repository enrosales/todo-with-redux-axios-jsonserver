import React, { useEffect } from 'react';
//Components
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import FilterList from '../FilterList';

export default function AppLayout(props: any) {
  const { getTodos } = props;
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <AddTodo />
      <TodoList />
      <FilterList />
    </>
  );
}
