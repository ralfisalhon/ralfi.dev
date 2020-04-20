/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './alphabet.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class AlphabetRecord extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      fontSpeed: 140,
    };
  }

  alphabetTimer = () => {
    let { fontSpeed, num } = this.state;
    if (num > ALPHABET.length) {
      setTimeout(() => {
        this.setState({ num: 1 });
        this.alphabetTimer();
      }, 3000);
      return;
    }
    setTimeout(() => {
      this.setState({ num: num + 1 });
      this.alphabetTimer();
    }, fontSpeed);
  };

  componentDidMount() {
    this.alphabetTimer();
  }

  render() {
    const { num } = this.state;
    return (
      <div>
        <p className="text fact-title">> I am the World's Fastest Smartphone Typer</p>
        <div className="m-10" />
        <div className="PIContainer">
          <p className="PI">{ALPHABET.substr(0, num)}</p>
        </div>
        <div className="m-10" />
        <p className="text">Watch me type the alphabet in 3.777 seconds on my Pixel 3:</p>
        <div className="m-10" />
        <iframe
          title="video"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Mo094dNblBc"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        />
      </div>
    );
  }
}

export default AlphabetRecord;
