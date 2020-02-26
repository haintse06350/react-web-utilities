import React, { Component } from 'react';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';
import { withStyles, Drawer, Typography, IconButton } from '@material-ui/core';
import { styles } from './MenuDrawer.style';
import classnames from 'classnames';
import IconDashboard from './assets/ui-icon-svg/328-presentation.svg';
import IconOverview from './assets/ui-icon-svg/324-browser.svg';
import IconCards from './assets/ui-icon-svg/232-credit-card.svg';
import IconForm from './assets/ui-icon-svg/108-browser-16.svg';
import IconTable from './assets/ui-icon-svg/020-browser-21.svg';
import IconLayout from './assets/ui-icon-svg/112-browser-15.svg';
import IconChart from './assets/ui-icon-svg/300-vector-2.svg';
import IconSetting from './assets/ui-icon-svg/268-settings.svg';
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
                to="/react-web-utilities"
                className={classnames(classes.listItem, { active: location.pathname === '/react-web-utilities' })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconDashboard} height={20} alt="icon" />
                </div>
                <Typography>Dashboard</Typography>
              </Link>
              <Link
                to="/react-web-utilities/overview"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/react-web-utilities/overview'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconOverview} height={20} alt="icon" />
                </div>
                <Typography>UI Overview</Typography>
              </Link>
              <Link
                to="/react-web-utilities/cards"
                className={classnames(classes.listItem, { active: location.pathname === '/react-web-utilities/cards' })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconCards} height={20} alt="icon" />
                </div>
                <Typography>Cards</Typography>
              </Link>
              <Link
                to="/react-web-utilities/layout"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/react-web-utilities/layout'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconLayout} height={20} alt="icon" />
                </div>
                <Typography>Layouts</Typography>
              </Link>
              <Link
                to="/react-web-utilities/form"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/react-web-utilities/form'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconForm} height={20} alt="icon" />
                </div>
                <Typography>Form</Typography>
              </Link>
              <Link
                to="/react-web-utilities/table"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/react-web-utilities/table'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconTable} height={20} alt="icon" />
                </div>
                <Typography>Tables</Typography>
              </Link>
              <Link
                to="/react-web-utilities/chart"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/react-web-utilities/chart'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconChart} height={20} alt="icon" />
                </div>
                <Typography>Charts</Typography>
              </Link>
            </div>
            <div className={classes.grow} />
            <div>
              <div className={classes.listItem} onClick={this.onLogout}>
                <div className={classes.listItemIcon}>
                  <img src={IconSetting} height={20} alt="icon" />
                </div>
                <Typography>Settings</Typography>
              </div>
            </div>
          </Drawer>
        );
      }
    }
  )
)
);
