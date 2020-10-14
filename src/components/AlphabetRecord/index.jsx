/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './alphabet.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const IS_MOBILE = window.innerWidth <= 1200 || window.innerHeight < 600;
class AlphabetRecord extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 1,
      fontSpeed: 140,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timerHandle);
    clearTimeout(this.restartTimer);
  }

  alphabetTimer = () => {
    let { fontSpeed, num } = this.state;
    if (num > ALPHABET.length) {
      this.restartTimer = setTimeout(() => {
        this.setState({ num: 1 });
        this.alphabetTimer();
      }, 3000);
      return;
    }
    this.timerHandle = setTimeout(() => {
      this.setState({ num: num + 1 });
      this.alphabetTimer();
    }, fontSpeed);
  };

  componentDidMount() {
    this.alphabetTimer();
  }


  render() {
    const { num,} = this.state;
    const { fgColor, bgColor, lightMode } = this.props;

    const videoWidth = IS_MOBILE ? window.innerWidth * 0.9 : 560;

    return (
      <div>
        <div className="PIContainer">
          <h2 style={{color: lightMode ? bgColor : fgColor}} className="PI">{ALPHABET.substr(0, num)}</h2>
        </div>
        <p style={{margin: '10px 0px'}}>Watch me type the alphabet in 3.777 seconds on my Pixel 3:</p>
        <iframe
          title="video"
          // 560, 315
          width={videoWidth}
          height={videoWidth*0.56}
          src="https://www.youtube-nocookie.com/embed/Mo094dNblBc"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        />
      </div>
    );
  }
}

export default AlphabetRecord;
