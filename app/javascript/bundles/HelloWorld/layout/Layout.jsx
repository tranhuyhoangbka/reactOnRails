import React, {Component} from 'react';
import {NavLink as Link} from 'react-router-dom';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li role="presentation">
            <Link to="/" activeClassName="active">React Router 1</Link>
          </li>
          <li role="presentation">
            <Link to="/roster" activeClassName="active">Roster</Link>
          </li>
          <li role="presentation">
            <Link to="/test_router2" activeClassName="active">React Router 2</Link>
          </li>
          <li role="presentation">
            <Link to="/test_router3" activeClassName="active">React Router 3</Link>
          </li>
        </ul>

        <div className="row page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
