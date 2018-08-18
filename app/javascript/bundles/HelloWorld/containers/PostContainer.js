import { connect } from 'react-redux';
import PostList from '../components/PostList';
import * as actions from '../actions/helloWorldActionCreators';

const mapStateToProps = (state) => ({postList: state.postList});

export default connect(mapStateToProps, actions)(PostList);
