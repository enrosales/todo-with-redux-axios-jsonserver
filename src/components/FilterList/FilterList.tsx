import React from 'react';
import { connect } from 'react-redux';
//Constants
import { Filter } from '../../constants/filters';
//Components
import Filters from '../Filters';
//Actions
import {
  showAll,
  showComplete,
  showIncomplete,
} from '../../actions/filterActions';

function FilterList(props: any) {
  const { showAll, showComplete, showIncomplete } = props;
  return (
    <div>
      <Filters render={showAll}>{Filter.SHOW_ALL}</Filters>
      <Filters render={showComplete}>{Filter.SHOW_COMPLETE}</Filters>
      <Filters render={showIncomplete}>{Filter.SHOW_INCOMPLETE}</Filters>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  showAll: () => dispatch(showAll()),
  showComplete: () => dispatch(showComplete()),
  showIncomplete: () => dispatch(showIncomplete()),
});

export default connect(null, mapDispatchToProps)(FilterList);
