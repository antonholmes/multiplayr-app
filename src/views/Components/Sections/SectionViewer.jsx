// import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
// import withStyles from '@material-ui/core/styles/withStyles';
// import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';
// import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
// import getusermedia from 'getusermedia';
// import screenRecord from 'screen-record';
// import VideoStreamMerger from 'video-stream-merger';
// let webcamStream;
// let screenStream;

// getusermedia({ video: true, audio: true }, function(err, webcamStream) {
//   screenRecord(window, function(err, sourceId, constraints) {
//     getusermedia(constraints, function(err, screenStream) {
//       // We now have 2 streams: webcamStream, screenStream
//     });
//   });
// });

// const merger = new VideoStreamMerger();

// // Add the screen capture. Position it to fill the whole stream (the default)
// merger.addStream(screenStream, {
//   x: 0, // position of the topleft corner
//   y: 0,
//   width: merger.width,
//   height: merger.height,
//   mute: true, // we don't want sound from the screen (if there is any)
// });

// // Add the webcam stream. Position it on the bottom left and resize it to 100x100.
// merger.addStream(webcamStream, {
//   x: 0,
//   y: merger.height - 100,
//   width: 100,
//   height: 100,
//   mute: false,
// });

// // Start the merging. Calling this makes the result available to us
// merger.start();

// // We now have a merged MediaStream!
// merger.result;

// // class SectionViewer extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <GridContainer>
// //           <GridItem xs={12} sm={12} md={8} lg={6}>
// //             <ReactPlayer
// //               url="https://www.youtube.com/watch?v=JdA9_mtXYME"
// //               config={{
// //                 youtube: {
// //                   playerVars: { showinfo: 1 },
// //                 },
// //                 facebook: {
// //                   appId: '261320394413541',
// //                 },
// //               }}
// //             />
// //           </GridItem>
// //           <GridItem xs={12} sm={12} md={8} lg={6} />
// //         </GridContainer>
// //       </div>
// //     );
// //   }
// // }

// // export default withStyles(basicsStyle)(SectionViewer);
