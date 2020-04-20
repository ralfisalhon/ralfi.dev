/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './clickable.css';
import PropTypes from 'prop-types';

class Clickable extends Component {
  getButtonStyle = (filled, color) => {
    return {
      border: '2px solid ' + color,
      borderRadius: '10px',
      padding: '6px 24px 6px 24px',
      outline: 'none',
      backgroundColor: filled ? color : 'white',
      cursor: 'pointer',
      boxShadow: '1px 1px 1px lightgray',
    };
  };

  getTextStyle = (filled, color) => {
    return {
      color: filled ? 'white' : color,
      fontWeight: '600',
      outline: 'none',
    };
  };

  render() {
    const {
      text, onClick, filled, color,
    } = this.props;
    return (
      <span className="disable-selection" role="button" tabIndex={0} onClick={onClick} style={this.getButtonStyle(filled, color)}>
        <span style={this.getTextStyle(filled, color)}>{text}</span>
      </span>
    );
  }
}

Clickable.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
  color: PropTypes.string,
};

Clickable.defaultProps = {
  filled: false,
  color: '#bb4731',
};

export default Clickable;
