import {connect} from 'react-redux';
import Dashboard2 from '../components/travel/Dashboard2';

const mapStateToProps = (state) => ({user: state.user, dashboard2: state.dashboard2});

const mapDispatchToProps = (dispatch) => {
  return {loadDashboard2: () => (dispatch({type: 'LOAD_DASHBOARD2'}))};
}

const Dashboard2Container = connect(mapStateToProps, mapDispatchToProps)(Dashboard2);
export default Dashboard2Container;
