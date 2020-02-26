import React, { Component } from 'react';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';
import { Logout } from 'mdi-material-ui';
import { withStyles, Drawer, Typography, IconButton } from '@material-ui/core';
import { styles } from './MenuDrawer.style';
import classnames from 'classnames';
import IconDashboard from './assets/dashboard.svg';
import IconOrder from './assets/Ic_orders.svg';
import IconEmployees from './assets/Ic_employee.svg';
import IconClients from './assets/Ic_client.svg';
import IconDiamond from './svg/041-value.svg';
import IconTrophy from './svg/042-trophy.svg';
import IconExcellence from './svg/036-Excellence.svg';
import { Link, withRouter } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// https://www.flaticon.com/packs/success-65
// https://www.flaticon.com/packs/web-design-ui/3

export const MenuDrawer = withRouter((
  withStyles(styles)(
    class extends Component {
      static propTypes = {
        classes: PropTypes.shape(Classes).isRequired,
        location: PropTypes.object.isRequired
      };

      constructor(props) {
        super(props);

        this.state = {
          open: false,
        };
      }

      render() {
        const { classes, location, open } = this.props;

        return (
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.props.onDrawerClose}>
                <ChevronLeftIcon className={classes.chevronIcon} />
              </IconButton>
            </div>
            <div className={classes.innerDrawer}>
              <Link
                to="/"
                className={classnames(classes.listItem, { active: location.pathname === '/' })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconDashboard} height={20} alt="icon" />
                </div>
                <Typography>Home</Typography>
              </Link>
              <Link
                to="/players"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/players'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconOrder} height={20} alt="icon" />
                </div>
                <Typography>Players</Typography>
              </Link>
              <Link
                to="/teams"
                className={classnames(classes.listItem, { active: location.pathname === '/teams' })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconEmployees} height={20} alt="icon" />
                </div>
                <Typography>Teams</Typography>
              </Link>
              <Link
                to="/tournaments"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/tournaments'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconClients} height={20} alt="icon" />
                </div>
                <Typography>Tournaments</Typography>
              </Link>
              <Link
                to="/layout"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/layout'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconDiamond} height={20} alt="icon" />
                </div>
                <Typography>Layout</Typography>
              </Link>
              <Link
                to="/table"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/table'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconTrophy} height={20} alt="icon" />
                </div>
                <Typography>Tables</Typography>
              </Link>
              <Link
                to="/excellence"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/excellence'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconExcellence} height={20} alt="icon" />
                </div>
                <Typography>Excellence</Typography>
              </Link>
            </div>
            <div className={classes.grow} />
            <div>
              <div className={classes.listItem} onClick={this.onLogout}>
                <div className={classes.listItemIcon}>
                  <Logout />
                </div>
                <Typography>Logout</Typography>
              </div>
            </div>
          </Drawer>
        );
      }
    }
  )
)
);
