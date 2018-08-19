import {connect} from 'react-redux';
import People from '../components/People';
import {fetchData} from '../actions/helloWorldActionCreators';

const mapStateToProps = (state) => ({appData: state.appData});

const mapDispatchToProps = (dispatch) => {
  return {fetchData: () => dispatch(fetchData())}
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
