import React, { Fragment } from "react";
import { Line } from 'react-chartjs-2';

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Activity by Month',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(55,90,127,0.4)',
      borderColor: 'rgba(55,90,127,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(55,90,127,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(55,90,127,1)',
      pointHoverBorderColor: 'rgba(55,90,127,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default () => (
  <Fragment>
    <h3>Welcome</h3>

    <div className="card text-white bg-secondary">
      <div className="card-body">
      <Line data={chartData} />
      </div>
    </div>

    <br />

    <div className="card text-white bg-secondary">
      <div className="card-body">
        <h4 className="card-title">Messages</h4>
        <p className="card-text">
          <span className="text-muted"> You have no new messages.</span>
        </p>
      </div>
    </div>
  </Fragment>
);
