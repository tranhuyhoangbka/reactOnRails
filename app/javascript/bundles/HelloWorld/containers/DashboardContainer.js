import {connect} from 'react-redux';
import Dashboard from '../components/travel/Dashboard';

const mapStateToProps = (state) => ({user: state.user, dashboard: state.dashboard});

const mapDispatchToProps = (dispatch) => {
  return {loadDashboard: () => (dispatch({type: 'LOAD_DASHBOARD'}))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
