import { connect } from 'react-redux';
//Components
import AppLayout from './AppLayout';
//Actions
import { getTodos } from '../../actions/todoAction';

const mapDispatchToProps = (dispatch: any) => ({
  getTodos: () => dispatch(getTodos()),
});

export default connect(null, mapDispatchToProps)(AppLayout);
