/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class SmallProject extends Component {
  render() {
    const { logo, name, title, techs } = this.props.project;
    
    return (
      <div className="small-project">
        <img className="logo-small" src={logo} alt="logo" />
        <div className="m-20-left split">
          <div>
            <h1 className="text big">{name}</h1>
            <p className="text">{title}</p>
          </div>
          <div className="m-10" />
          <p className="text smaller">{techs}</p>
        </div>
      </div>
    );
  }
}

SmallProject.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  awards: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.objectOf(PropTypes.string),
  video: PropTypes.string,
};

SmallProject.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  title: 'Default Title',
  color: 'coral',
  description: 'Default Description',
  awards: null,
  platforms: null,
  video: null,
};

export default SmallProject;
