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

  copyClipboard = (lang) => {
    navigator.clipboard.writeText(this.props[lang]);
    this.setState({ copying: true });
    setTimeout(() => {
      this.setState({ copying: false });
    }, 750);
  };

  render() {
    const { copying } = this.state;
    return (
      <div className="row">
        <div className="copy-options">
          <p
            className={copying ? 'text smaller disable-selection' : 'text smaller copy-option'}
            onClick={() => this.copyClipboard('HTML')}
          >
            {copying ? 'Copied!' : 'HTML'}
          </p>
          <div className="m-5" />
          <p className="text smaller copy-option" onClick={() => this.copyClipboard('CSS')}>
            {!copying && 'CSS'}
          </p>
        </div>
      </div>
    );
  }
}

export default CopyCode;
