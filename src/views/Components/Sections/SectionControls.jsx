import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { hot } from 'react-hot-loader';
import screenfull from 'screenfull';

// import './reset.css'
// import './defaults.css'
// import './range.css'
// import './App.css'

import ReactPlayer from 'react-player';
// import Duration from './SectionDuration';
// import { version } from '../../../../package.json';

const MULTIPLE_SOURCES = [
  {
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    type: 'video/mp4',
  },
  {
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv',
    type: 'video/ogv',
  },
  {
    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
    type: 'video/webm',
  },
];

class SectionControls extends Component {
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
    const {
      url,
      playing,
      volume,
      muted,
      loop,
      played,
      loaded,
      playbackRate,
    } = this.state;
    // const SEPARATOR = ' · ';

    return (
      <div className="app">
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
        <Button justicon round color="primary" onClick={this.onClickFullscreen}>
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
      </div>
    );
  }
}

export default hot(module)(SectionControls);
