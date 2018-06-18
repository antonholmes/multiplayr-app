import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

import materialui from 'assets/img/logos/materialui.png';
import socket from 'assets/img/logos/socket.png';
import webrtc from 'assets/img/logos/webrtc.png';

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is what's under the hood:</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={webrtc} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  WebRTC
                  <br />
                  <small className={classes.smallTitle}>API Interface</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    WebRTC is an open framework for the web that enables Real
                    Time Communications in the browser. It includes the
                    fundamental building blocks for high-quality communications
                    on the web, such as network, audio and video components used
                    in voice and video chat applications.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/webrtc"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-github'} />
                  </Button>
                  <Button
                    href="https://webrtc.org/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-chrome'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={socket} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Socket.io
                  <br />
                  <small className={classes.smallTitle}>
                    Realtime Application Framework
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Socket.IO enables real-time bidirectional event-based
                    communication. It works on every platform, browser or
                    device, focusing equally on reliability and speed.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/socketio/socket.io"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-github'} />
                  </Button>
                  <Button
                    href="https://socket.io/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-chrome'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={materialui} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Material-UI
                  <br />
                  <small className={classes.smallTitle}>CSS Framework</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    React components that implement Google's Material Design.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/mui-org/material-ui"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-github'} />
                  </Button>
                  <Button
                    href="https://material-ui.com/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + ' fab fa-chrome'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
