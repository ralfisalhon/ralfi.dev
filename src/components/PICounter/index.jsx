/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';

const PI =
  '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912';

class PICounter extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      fontSpeed: 20,
    };
  }

  piTimer = () => {
    let { fontSpeed, num } = this.state;
    if (num >= PI.length) return;
    if (fontSpeed > 50) {
      this.setState({ fontSpeed: fontSpeed * 0.98 });
    }
    setTimeout(() => {
      this.setState({ num: num + 1 });
      this.piTimer();
    }, fontSpeed);
  };

  componentDidMount() {
    // this.piTimer();
  }

  render() {
    const { num } = this.state;
    return (
      <div>
        <p className="text fact-title">> I know 500 digits of π</p>
        <div className="m-10" />
        <div className="PIContainer">
          <p className="PI">
            <b
              onClick={() => this.piTimer()}
              style={num === 0 ? { textDecorationLine: 'underline', cursor: 'pointer' } : {}}
            >
              3.14
            </b>
            {PI.substr(4, num)}
          </p>
        </div>
        <div className="m-10" />
        <p className="text">
          I{' '}
          <a href="https://github.com/ralfisalhon/piGame" target="_blank" rel="noopener noreferrer">
            made an app
          </a>{' '}
          to practice it as well.
        </p>
      </div>
    );
  }
}

export default PICounter;
