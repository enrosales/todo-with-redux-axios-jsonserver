import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
//Types
import { Props } from '../types';
import { Todo } from '../../TodoItem/types';
//Actions
import { addTodo } from '../../../actions/todosAction';

function AddTodo(props: Props) {
  const [text, setText] = useState('');
  const { addTodo, todos } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) =>
    new Promise(resolve => {
      e.preventDefault();
      if (text.trim()) {
        const newTodo: Todo = {
          id: Math.random(),
          done: false,
          text,
        };
        addTodo(todos, newTodo);
      }
      setText('');
      resolve();
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='addTodo'
          type='text'
          value={text}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
