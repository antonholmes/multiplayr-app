import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { findDOMNode } from 'react-dom';

import screenfull from 'screenfull';
import withStyles from '@material-ui/core/styles/withStyles';
import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
// import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx';
// import Nouislider from 'react-nouislider';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Forward5 from '@material-ui/icons/Forward5';
import Fullscreen from '@material-ui/icons/Fullscreen';
import Pause from '@material-ui/icons/Pause';
import Play from '@material-ui/icons/PlayArrow';
import Replay5 from '@material-ui/icons/Replay5';
import Restore from '@material-ui/icons/Restore';
import Stop from '@material-ui/icons/Stop';

class SectionPlayer extends Component {
  state = {
    url: null,
    playing: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    });
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  stop = () => {
    this.setState({ url: null, playing: false });
  };
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };
  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };
  onPause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };
  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  onProgress = state => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  onEnded = () => {
    console.log('onEnded');
    this.setState({ playing: this.state.loop });
  };
  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };
  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };
  ref = player => {
    this.player = player;
  };
  render() {
    const { classes } = this.props;
    const {
      // url,
      playing,
      volume,
      muted,
      loop,
      // played,
      // loaded,
      playbackRate,
    } = this.state;
    // const SEPARATOR = ' · ';
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <div>
              <CustomInput
                // type="text"
                // onSubmit={() => this.setState({ url: this.urlInput.value })}
                ref={input => {
                  this.urlInput = input;
                }}
                formControlProps={{ fullWidth: true }}
                labelText="Enter URL of video you want to stream"
                id="float"
              />
              <Button
                round
                color="success"
                onClick={() => this.setState({ url: this.urlInput.value })}
              >
                Load
              </Button>
              <Button justicon round color="success" onClick={this.playPause}>
                {playing ? (
                  <Pause className={classes.icons} />
                ) : (
                  <Play className={classes.icons} />
                )}
              </Button>
              <Button justicon round color="danger" onClick={this.stop}>
                <Stop className={classes.icons} />
              </Button>
              <Button
                justicon
                round
                color="primary"
                onClick={this.onClickFullscreen}
              >
                <Fullscreen className={classes.icons} />
              </Button>
              <Button
                justicon
                round
                color="info"
                onClick={this.setPlaybackRate}
                value={0.5}
              >
                <Replay5 className={classes.icons} />
              </Button>
              <Button
                justicon
                round
                color="info"
                onClick={this.setPlaybackRate}
                value={1}
              >
                <Restore className={classes.icons} />
              </Button>
              <Button
                justicon
                round
                color="info"
                onClick={this.setPlaybackRate}
                value={1.5}
              >
                <Forward5 className={classes.icons} />
              </Button>
              <ReactPlayer
                // playing="true"
                ref={this.ref}
                className="react-player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=vgbL3bsZDgk"
                // playing={playing}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={this.onPlay}
                onPause={this.onPause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.onEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.onProgress}
                onDuration={this.onDuration}
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 },
                  },
                  facebook: {
                    appId: '261320394413541',
                  },
                  soundcloud: {
                    preload: 'true',
                  },
                  dailymotion: {
                    preload: true,
                  },
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(basicsStyle)(SectionPlayer);
