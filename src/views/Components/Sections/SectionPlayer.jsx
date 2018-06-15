import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import withStyles from '@material-ui/core/styles/withStyles';
import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';

class SectionPlayer extends Component {
  render() {
    return (
      <ReactPlayer url="https://www.youtube.com/watch?v=BmTfxyoEqAc" playing />
    );
  }
}

export default withStyles(basicsStyle)(SectionPlayer);
