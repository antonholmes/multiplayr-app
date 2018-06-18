import React from 'react';
// react component for creating beautiful carousel
// import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import Button from 'components/CustomButtons/Button.jsx';

const mediaStreamConstraints = {
  video: true,
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);

class SectionShare extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div className={classes.section}>
        <video id="localVideo" autoplay playsinline />
        <video id="remoteVideo" autoplay playsinline />

        <div>
          <Button id="startButton">Start</Button>
          <Button id="callButton">Call</Button>
          <Button id="hangupButton">Hang Up</Button>
          <script src="https://webrtc.github.io/adapter/adapter-latest.js" />
          <script src="/socket.io/socket.io.js" />
          {/* <script src="SectionShareMain.js" /> */}
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionShare);
