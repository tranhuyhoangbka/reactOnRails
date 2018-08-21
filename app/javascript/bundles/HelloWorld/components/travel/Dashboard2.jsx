import React, {Component} from 'react';

class Dashboard2 extends Component {
  componentDidMount() {
    this.props.loadDashboard2();
  }

  render() {
    const {user, dashboard2} = this.props;
    return (
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title">Panel Not Sequence</div>
          </div>

          <div className="panel-body">
            <p>Here is your itinerary</p>
            <p><i className="glyphicon glyphicon-user"></i> {user.email}</p>
            <p><strong>Your departure: </strong>{dashboard2.departure ? dashboard2.departure.date : ''}</p>
            <p><strong>Your Flight: </strong>{dashboard2.flight ? dashboard2.flight.plane.make : ''}</p>
            <p><strong>Weather Forecast: </strong>{dashboard2.forecast ? dashboard2.forecast.forecast : ''}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard2;
