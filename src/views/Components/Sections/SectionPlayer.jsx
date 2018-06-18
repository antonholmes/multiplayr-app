import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import withStyles from '@material-ui/core/styles/withStyles';
import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

class SectionPlayer extends Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} lg={6}>
            <ReactPlayer
              playing="true"
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: '261320394413541',
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={6} />
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionPlayer);
