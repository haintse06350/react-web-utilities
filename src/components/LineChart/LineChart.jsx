import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './LineChart.style';
import { Line } from 'react-chartjs-2';

export const LineChart = withStyles(styles)(
  class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
      };
    }

    render() {
      const { classes } = this.props

      return (
        <div className={classes.chart}>
          <Line
            height={250}
            data={{
              labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
              datasets: [
                {
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  borderWidth: 1,
                  data: [12, 32, 22, 52, 19, 23, 43, 65, 26],
                }
              ]
            }}
            options={{
              height: 250,
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  display: true
                }],
                xAxes: [
                  {
                    display: true
                  }
                ]
              }
            }}
          />
        </div>
      )
    }
  })