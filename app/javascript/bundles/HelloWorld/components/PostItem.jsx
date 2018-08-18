import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'whatwg-fetch';
import PostEditForm from './PostEditForm';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {editModeOn: false}

    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editModeChange = this.editModeChange.bind(this);
  }

  editPost() {
    this.setState({editModeOn: true});
  }

  deletePost() {
    const deleted = confirm('Are you sure ?');
    const props = this.props;
    if(deleted == true) {
      fetch(`/posts/${this.props.post.id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': 'tutorial_secret'
        },
        body: JSON.stringify({id: this.props.post.id})
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        props.deletePost(props.post.id);
      }).catch(function(ex) {
        console.log(ex);
      });
    }
  }

  editModeChange(status) {
    this.setState({editModeOn: status});
  }

  render() {
    return (
      <div className="post-item-wrapper">
        {this.state.editModeOn ? (
          <PostEditForm post={this.props.post} editModeChange={this.editModeChange} />
        ) : (
          <div className="post-item">
            <p className="post-item-title">{this.props.post.title}</p>
            <div className="post-item-body">
              {this.props.post.body}
            </div>
            <button type="button" onClick={this.editPost}>Edit</button>
            <button type="button" onClick={this.deletePost}>Remove</button>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
