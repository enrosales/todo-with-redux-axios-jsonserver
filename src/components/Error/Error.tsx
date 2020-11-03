import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';

const styledP = {
  color: 'red',
};

export const Error = (props: any) => {
  const { error } = props;
  return <>{error && <p style={styledP}>Upsss! {error}</p>}</>;
};

const mapStateToProps = (state: AppState) => ({
  error: state.todos.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
