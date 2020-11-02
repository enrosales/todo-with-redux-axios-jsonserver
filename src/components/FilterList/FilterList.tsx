import React from 'react';
import { connect } from 'react-redux';
//Types
import { Props } from './types';
//Constants
import { Filter } from '../../constants/filters';
//Actions
import {
  showAll,
  showComplete,
  showIncomplete,
} from '../../actions/filterActions';

function FilterList(props: Props) {
  const { showAll, showComplete, showIncomplete } = props;
  return (
    <div>
      <button onClick={showAll}>{Filter.SHOW_ALL}</button>
      <button onClick={showComplete}>{Filter.SHOW_COMPLETE}</button>
      <button onClick={showIncomplete}>{Filter.SHOW_INCOMPLETE}</button>
    </div>
  );
}

const mapDispatchToProps = {
  showAll,
  showComplete,
  showIncomplete,
};

export default connect(null, mapDispatchToProps)(FilterList);
