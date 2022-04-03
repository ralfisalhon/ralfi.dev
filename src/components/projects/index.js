import React, { Component } from 'react';
import './styles.css';

import coverlove from 'assets/images/round_icons/coverlove.png';
import hearo from 'assets/images/round_icons/hearo.png';
import igurme from 'assets/images/round_icons/igurme.png';
import jamblr from 'assets/images/round_icons/jamblr.png';
import polysentry from 'assets/images/round_icons/polysentry.png';
import potencia from 'assets/images/round_icons/potencia.png';
import redorblue from 'assets/images/round_icons/redorblue.png';
import tunewise from 'assets/images/round_icons/tunewise.png';

import PROJECTS from 'assets/data/projects';

const getLink = name => {
  const proj = PROJECTS.find(proj => proj.name === name);
  return proj.platforms.appstore || proj.platforms.github;
};

class FloatingProjects extends Component {
  render() {
    return (
      <div className="base">
        <div className="item item-1">
          <a
            href={getLink('coverlove')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={coverlove} />
            <p className="text small m--5">coverlove</p>
          </a>
        </div>
        <div className="item item-2">
          <a
            className="no-border"
            href={getLink('Jamblr')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={jamblr} />
            <p className="text small m--5">Jamblr</p>
          </a>
        </div>
        <div className="item item-3">
          <a
            className="no-border"
            href={getLink('PolySentry')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={polysentry} />
            <p className="text small m--5">PolySentry</p>
          </a>
        </div>
        <div className="item item-4">
          <a
            className="no-border"
            href={getLink('Red or Blue')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={redorblue} />
            <p className="text small m--5">Red or Blue</p>
          </a>
        </div>
        <div className="item item-5">
          <a
            className="no-border"
            href={getLink('Potencia')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={potencia} />
            <p className="text small m--5">Potencia</p>
          </a>
        </div>
        <div className="item item-6">
          <a
            className="no-border"
            href={PROJECTS.find(proj => proj.name === 'Hearo')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={hearo} />
            <p className="text small m--5">Hearo</p>
          </a>
        </div>
        <div className="item item-7">
          <a
            className="no-border"
            href={getLink('TuneWise')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={tunewise} />
            <p className="text small m--5">TuneWise</p>
          </a>
        </div>
        <div className="item item-8">
          <a
            className="no-border"
            href={getLink('iGurme')}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="round_icon" alt="app_icon" src={igurme} />
            <p className="text small m--5">iGurme</p>
          </a>
        </div>
      </div>
    );
  }
}

export default FloatingProjects;
