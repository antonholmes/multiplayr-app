/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="profile-page" className={classes.block}>
                Anton Holmes
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/" className={classes.block}>
                Multiplayr
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="landing-page" className={classes.block}>
                Under the Hood
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://leastcostlymobilehomesdirect.herokuapp.com/"
                className={classes.block}
                target="_blank"
              >
                Least Costly Mobile Homes Direct
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made by{' '}
          <a
            href="https://www.antonholmes.com"
            className={aClasses}
            target="_blank"
          >
            Anton Holmes
          </a>
          {''}
          .
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
};

export default withStyles(footerStyle)(Footer);
