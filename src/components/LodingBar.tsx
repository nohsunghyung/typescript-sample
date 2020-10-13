import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

class LodingBar extends Component {
  render() {
    return <ClipLoader size={200} loading={true} />;
  }
}

export default LodingBar;
