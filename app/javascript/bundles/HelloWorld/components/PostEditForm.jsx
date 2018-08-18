import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class PostEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body
    };

    this.titleChanged = this.titleChanged.bind(this);
    this.bodyChanged = this.bodyChanged.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  titleChanged(event) {
    this.setState({title: event.target.value, body: this.state.body});
  }

  bodyChanged(event) {
    this.setState({title: this.state.title, body: event.target.value});
  }

  cancel() {
    this.props.editModeChange(false);
  }

  save() {
    const context = this.context;
    const props = this.props;
    fetch(`/posts/${this.props.post.id}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': 'tutorial_secret'
      },
      body: JSON.stringify({post: {title: this.state.title, body: this.state.body}})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      context.updatePost(data);
      props.editModeChange(false);
    }).catch(function(ex) {
      console.log(ex);
    })
  }

  render() {
    return (
      <div className="edit-form-container">
        <div className="form-group">
          <label htmlFor={`edit-post-title-${this.props.post.id}`}>Title</label>
          <input
            id={`edit-post-title-${this.props.post.id}`}
            value={this.state.title}
            onChange={this.titleChanged}
          />
        </div>

        <div className="form-group">
          <label htmlFor={`edit-post-body-${this.props.post.id}`}>Body</label>
          <input
            id={`edit-post-body-${this.props.post.id}`}
            value={this.state.body}
            onChange={this.bodyChanged}
          />
        </div>

        <div className="actions">
          <button type="button" onClick={this.cancel}>Cancel</button>
          <button type="button" onClick={this.save}>Save</button>
        </div>
      </div>
    );
  }
}

PostEditForm.defaultProps = {
  id: '',
  title: '',
  body: ''
}

PostEditForm.contextTypes = {
  updatePost: PropTypes.func
};

export default PostEditForm;
