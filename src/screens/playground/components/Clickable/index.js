/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './clickable.css';
import PropTypes from 'prop-types';

class Clickable extends Component {
  render() {
    const { text, filled, color, press } = this.props;
    return (
      <div
        className="button disable-selection"
        style={filled ? { backgroundColor: color, borderColor: color } : null}
        onClick={press}
        {...this.props}
      >
        <h1 className={filled ? 'text white' : 'text'}>{text}</h1>
      </div>
    );
  }
}

Clickable.propTypes = {
  text: PropTypes.string.isRequired,
  filled: PropTypes.bool,
  color: PropTypes.string,
  press: PropTypes.func,
};

Clickable.defaultProps = {
  text: 'Clickable',
  filled: false,
  color: 'var(--dark-color)',
};

export default Clickable;
