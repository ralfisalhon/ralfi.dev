/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './project.css';
import PropTypes from 'prop-types';

const platform_conversions = {
  github: 'GitHub',
  playstore: 'Play Store',
  appstore: 'App Store',
  website: 'Website',
};

class Project extends Component {
  render() {
    const { logo, name, title, description, awards, platforms, screenshots, video, color, wideSS } = this.props.project;
    return (
      <div className="project">
        <div className="catchPhraseContainer" style={{ backgroundColor: color }}>
          <div className="flexRow">
            <div className="verticalCenter">
              <h1 className={global.isMobile ? 'text white' : 'catchPhrase white'}>{title}</h1>

              <center className="right">
                <img className={global.isMobile ? 'logo-small-project' : 'logo'} src={logo} alt="logo" />
                <div className="m-10" />
                <p className={global.isMobile && name.length > 8 ? 'text white small' : 'text white'}>{name}</p>
              </center>
            </div>
          </div>
        </div>
        <div className="m-20" />
        {platforms && (
          <div className="platforms">
            {Object.keys(platforms).map((platform) => (
              <div
                key={platform}
                className="platform cursor"
                style={{ backgroundColor: color, marginRight: '10px' }}
                onClick={() => window.open(platforms[platform], '_blank')}
              >
                <p className="text white">{platform_conversions[platform]}</p>
              </div>
            ))}
            {awards && (
              <div className="awards right">
                {awards.map((award) => (
                  <div className="platform" style={{ backgroundColor: color }} key={award}>
                    <p className="text white">
                      {'🏆 '}
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div>
          {Array.isArray(description) ? (
            description.map((desc) => (
              <div style={{ marginBottom: '10px' }} key={desc}>
                <p className="text">{desc}</p>
              </div>
            ))
          ) : (
            <p className="text">{description}</p>
          )}
          <center>
            {description && <div className="m-20" />}
            <div className="row around">
              {screenshots &&
                screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    className={wideSS ? 'screenshot-wide' : 'screenshot'}
                    alt="project screenshot"
                    src={screenshot}
                  ></img>
                ))}
            </div>
            {video && (
              <div>
                <div className="m-20" />
                <iframe
                  title="video"
                  width={window.innerWidth * 0.6}
                  height={window.innerWidth * 0.6 * 0.56}
                  src={video}
                  frameBorder="0"
                />
              </div>
            )}
          </center>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  awards: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.objectOf(PropTypes.string),
  video: PropTypes.string,
};

Project.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  title: 'Default Title',
  color: 'coral',
  description: 'Default Description',
  awards: null,
  platforms: null,
  video: null,
};

export default Project;
