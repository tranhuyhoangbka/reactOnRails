import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadDashboard();
  }

  render() {
    const {user, dashboard} = this.props;
    return (
      <div className="col-md-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Panel Sequence</div>
        </div>
        <div className="panel-body">
          <p>Here is your itinerary</p>
          <p><i className="glyphicon glyphicon-user"></i> {user.email}</p>
          <p><strong>Your departure: </strong>{dashboard.departure ? dashboard.departure.date : ''}</p>
          <p><strong>Your Flight: </strong>{dashboard.flight ? dashboard.flight.plane.make : ''}</p>
          <p><strong>Weather Forecast: </strong>{dashboard.forecast ? dashboard.forecast.forecast : ''}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Dashboard;
