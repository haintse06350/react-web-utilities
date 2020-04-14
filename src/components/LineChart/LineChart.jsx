import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './LineChart.style';
import { Line, Bar, Doughnut, HorizontalBar, Pie } from 'react-chartjs-2';
import { Card } from '../Card';

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
        <div>
          <div className={classes.flex}>
            <div className={classes.line}>
              <Card>
                <div className={classes.chart}>
                  <Line
                    height={250}
                    data={{
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      datasets: [
                        {
                          label: 'A',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [0, 32, 62, 52, 69, 53, 43, 25, 66],
                        },
                        {
                          label: 'B',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: '#FF8282',
                          borderColor: '#ff9b9b',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [32, 12, 49, 78, 35, 87, 21, 63, 0],
                        }
                      ]
                    }}
                    options={{
                      height: 250,
                      maintainAspectRatio: false,
                      legend: {
                        display: true
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
              </Card>
            </div>
            <div className={classes.bar}>
              <Card>
                <div className={classes.chart}>
                  <Bar
                    height={250}
                    data={{
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      datasets: [
                        {
                          label: 'A',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [0, 32, 62, 52, 69, 53, 43, 25, 66],
                        },
                        {
                          label: 'B',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: '#FF8282',
                          borderColor: '#ff9b9b',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [32, 12, 49, 78, 35, 87, 21, 63, 0],
                        }
                      ]
                    }}
                    options={{
                      height: 250,
                      maintainAspectRatio: false,
                      legend: {
                        display: true
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
              </Card>
            </div>
          </div>
          <div className={classes.flex2}>
            <div className={classes.line}>
              <Card>
                <div className={classes.chart}>
                  <HorizontalBar
                    height={250}
                    data={{
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      datasets: [
                        {
                          label: 'A',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [0, 32, 62, 52, 69, 53, 43, 25, 66],
                        },
                        {
                          label: 'B',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: '#FF8282',
                          borderColor: '#ff9b9b',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [32, 12, 49, 78, 35, 87, 21, 63, 0],
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
              </Card>
            </div>
            <div className={classes.bar}>
              <Card>
                <div className={classes.chart}>
                  <Doughnut
                    height={250}
                    data={{
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      datasets: [
                        {
                          label: 'A',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [0, 32, 62, 52, 69, 53, 43, 25, 66],
                        },
                        {
                          label: 'B',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: '#FF8282',
                          borderColor: '#ff9b9b',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [32, 12, 49, 78, 35, 87, 21, 63, 0],
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
              </Card>
            </div>
            <div className={classes.bar}>
              <Card>
                <div className={classes.chart}>
                  <Pie
                    height={250}
                    data={{
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      datasets: [
                        {
                          label: 'A',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [0, 32, 62, 52, 69, 53, 43, 25, 66],
                        },
                        {
                          label: 'B',
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: '#FF8282',
                          borderColor: '#ff9b9b',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          data: [32, 12, 49, 78, 35, 87, 21, 63, 0],
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
              </Card>
            </div>
          </div>
        </div>
      )
    }
  })