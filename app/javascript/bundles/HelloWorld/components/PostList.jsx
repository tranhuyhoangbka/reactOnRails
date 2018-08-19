import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-js-pagination';
import PostItem from './PostItem';
import PostForm from './PostForm';
import * as constants from '../constants/helloWorldConstants';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {activePage: constants.DEFAULT_ACTIVE_PAGE};
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getChildContext() {
    return {updatePost: this.props.updatePost};
  }

  componentDidMount() {
    console.log(this.props.postList);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  getPostItemsOfPage(pageNumber, items) {
    if (items.length <= constants.ITEMS_COUNT_PER_PAGE) {
      return items;
    } else {
      const firstPosition = (pageNumber - 1) * constants.ITEMS_COUNT_PER_PAGE;
      const lastPosition = (pageNumber) * constants.ITEMS_COUNT_PER_PAGE - 1;
      const filteredItems = items.filter((item, index) => {
        return index >= firstPosition && index <= lastPosition;
      });
      return filteredItems;
    }
  }

  render() {
    const postItems = this.getPostItemsOfPage(this.state.activePage, this.props.postList)
      .map((post) => <PostItem post={post} key={post.id} deletePost={this.props.deletePost} />);

    return (
      <div className="post-container">
        <PostForm createPost={this.props.createPost} />
        <ul className="post-list">
          {postItems}
        </ul>

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={constants.ITEMS_COUNT_PER_PAGE}
          totalItemsCount={this.props.postList.length}
          pageRangeDisplayed={constants.PAGE_RANGE_DISPLAYED}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

PostList.propTypes = {
  postList: PropTypes.array.isRequired
};

PostList.childContextTypes = {
  updatePost: PropTypes.func
}

export default PostList;
