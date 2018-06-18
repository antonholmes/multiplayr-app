import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Airplay from '@material-ui/icons/Airplay';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk video</h2>
            <h5 className={classes.description}>
              The idea was to use this tool to scrape off Baseball Savant and
              analyze the physical motion and strain pitchers experience on a
              game-to-game basis. It evolved into something way bigger.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Shared Streaming"
                description="Ever thought how you can share the same exact video, regardless of distance/time zone? Comment and share reactions real time."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Secure Connection"
                description="Using Sockets and WebRTC, technological tools would be of utmost security, ensuring that the relationship stays peer-to-peer."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Publicly Available Videos"
                description="Share your favorite videos from sites such as YouTube, Vimeo, DailyMotion, Twitch, and the like with the customized API and SDK to load their videos up on Multiplayr."
                icon={Airplay}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
