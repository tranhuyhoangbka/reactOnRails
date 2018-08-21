import {connect} from 'react-redux';
import Dashboard3 from '../components/travel/Dashboard3';

const mapStateToProps = (state) => ({user: state.user, dashboard3: state.dashboard3});

const mapDispatchToProps = (dispatch) => {
  return {loadDashboard3: () => dispatch({type: 'LOAD_DASHBOARD3'})};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard3);
