import React from 'react';
import { connect } from 'react-redux';
//Types
import { Props } from './types';

import { AppState } from '../../store';

function Filters(props: any) {
  const { render, children, filter } = props;
  const disabled = filter === children;
  return (
    <button
      disabled={disabled}
      onClick={() => render()}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  );
}

const mapStateToProps = (state: AppState) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, {})(Filters);
