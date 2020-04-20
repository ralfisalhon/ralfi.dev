/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './smallproject.css';
import PropTypes from 'prop-types';

class SmallProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    this.setState({ isHovering: !this.state.isHovering });
  };

  render() {
    const { logo, name, title, techs, contributors } = this.props.project;
    const { isHovering } = this.state;

    return (
      <div className="small-project" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
        <img className="logo-small" src={logo} alt="logo" />
        <div className="m-20-left split">
          <div>
            <h1 className="text big">{name}</h1>
            <p className="text">{title}</p>
          </div>
          {isHovering && (
            <span className="fade-in-fast">
              <div className="m-10" />
              <p className="text smaller">
                <b>Tech Stack:</b> {techs}
              </p>
              {contributors && (
                <span>
                  <div className="m-5" />
                  <p className="text smaller">
                    <b>Contributors:</b> {contributors}
                  </p>
                </span>
              )}
            </span>
          )}
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
  techs: PropTypes.string,
  contributors: PropTypes.string,
};

SmallProject.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  title: 'Default Title',
  color: 'coral',
  description: 'Default Description',
};

export default SmallProject;
