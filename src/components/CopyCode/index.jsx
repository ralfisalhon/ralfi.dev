/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './copy.css';

class CopyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: false,
    };
  }

  copyClipboard = () => {
    this.setState({ copying: true });
  };

  render() {
    return (
      <div className="copy-options">
        <p className="text smaller copy-option" onClick={() => this.copyClipboard()}>
          HTML
        </p>
        <div className="m-5" />
        <p className="text smaller copy-option">CSS</p>
      </div>
    );
  }
}

export default CopyCode;
