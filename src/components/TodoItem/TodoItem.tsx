import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
//CSS
import './TodoItem.css';
//Props Types
import { Props, Todo } from './types';
//Actions
import { updateTodo, deleteTodo } from '../../actions/todoAction';

export function TodoItem(props: Props) {
  const { id, text, done } = props.todo;
  const { updateTodo, deleteTodo } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    new Promise(resolve => {
      const newTodo: Todo = {
        id,
        text,
        done: !done,
      };
      updateTodo(newTodo);
      resolve();
    });

  const handleDelete = () =>
    new Promise(resolve => {
      deleteTodo(id);
      resolve();
    });

  return (
    <div className='todoItem'>
      <p>{text}</p>
      <input
        type='checkbox'
        checked={done}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      ></input>
      <button onClick={() => handleDelete()}>X</button>
    </div>
  );
}

const mapDispatchToProps = {
  updateTodo,
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
