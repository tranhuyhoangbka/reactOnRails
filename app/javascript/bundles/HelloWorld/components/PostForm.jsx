import validator from 'react-validation';
import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import Button from 'react-validation/build/button';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

const lt = (value, props) => {
  // get the maxLength from component's props
  if (value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};

const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};

class PostForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {title: '', body: ''};

    this.titleChanged = this.titleChanged.bind(this);
    this.bodyChanged = this.bodyChanged.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // this.form.showError(this.inputTitle, <span>API error</span>);
      // this.form.validate('body');
      this.form.validateAll();
    }, 1000);
  }

  titleChanged(event) {
    this.setState({title: event.target.value, body: this.state.body});
  }

  bodyChanged(event) {
    this.setState({title: this.state.title, body: event.target.value});
  }

  createPost(event) {
    event.preventDefault();
    const props = this.props;
    fetch('/posts', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': 'tutorial_secret'
      },
      body: JSON.stringify({
        post: {title: this.state.title, body: this.state.body}
      })
    })
      .then(function(response) {
        if(response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }).then(function(data) {
        console.log('parsed json', data);
        props.createPost(data);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="post-form-container">
        <h2>Create a new post</h2>
        <Form ref={c => {this.form = c}} className="post-form" onSubmit={this.createPost}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <Input
              id="title"
              name="title"
              ref={c => {this.inputTitle = c}}
              value={this.state.title}
              maxLength="20"
              validations={[required, lt]}
              onChange={this.titleChanged} />
          </div>

          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <Textarea
              id="body"
              name="body"
              value={this.state.body}
              maxLength="3000"
              ref={c => {this.bodyInput = c}}
              validations={[required, lt]}
              onChange={this.bodyChanged}>
            </Textarea>
          </div>

          <div className="actions">
            <Button>Sumit</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default PostForm;
