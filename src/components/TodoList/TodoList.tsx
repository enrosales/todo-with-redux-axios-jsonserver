import React from 'react';
import { connect } from 'react-redux';
//Types
import { Props } from './types';
//Components
import TodoItem from '../TodoItem/TodoItem';
import { AppState } from '../../store';

export function TodoList(props: Props) {
  const { todos } = props;
  return (
    <>
      {!todos || todos.length === 0 ? (
        <p>Nothing todo...</p>
      ) : (
        todos.map(todo => {
          return (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          );
        })
      )}
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
