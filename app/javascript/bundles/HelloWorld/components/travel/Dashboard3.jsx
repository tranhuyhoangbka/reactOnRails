import React, {Component} from 'react';

class Dashboard3 extends Component {
  componentDidMount() {
    this.props.loadDashboard3();
  }

  render() {
    console.log(this.props);
    const {user, dashboard3} = this.props;
    return (
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title">Dashboard 3</div>
          </div>
          <div className="panel-body">
            <p>Here is your itinerary</p>
            <p><i className="glyphicon glyphicon-user"></i> {user.email}</p>
            <p><strong>Your departure: </strong>{dashboard3.departure ? dashboard3.departure.date : ''}</p>
            <p><strong>Your Flight: </strong>{dashboard3.flight ? dashboard3.flight.plane.make : ''}</p>
            <p><strong>Weather Forecast: </strong>{dashboard3.forecast ? dashboard3.forecast.forecast : ''}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard3;
