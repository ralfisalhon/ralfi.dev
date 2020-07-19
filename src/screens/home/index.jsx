import React, { useState } from 'react';
import './home.css';

import { Link } from 'react-router-dom';

import coverlove from '../../assets/images/round_icons/coverlove.png';
import hearo from '../../assets/images/round_icons/hearo.png';
import igurme from '../../assets/images/round_icons/igurme.png';
import jamblr from '../../assets/images/round_icons/jamblr.png';
import polysentry from '../../assets/images/round_icons/polysentry.png';
import potencia from '../../assets/images/round_icons/potencia.png';
import redorblue from '../../assets/images/round_icons/redorblue.png';
import tunewise from '../../assets/images/round_icons/tunewise.png';

import LinkedInLogo from '../../assets/svg/linkedin.svg';
import YoutubeLogo from '../../assets/svg/youtube.svg';
import GithubLogo from '../../assets/svg/github.svg';
import SpotifyLogo from '../../assets/svg/spotify.svg';

import resume from '../../assets/pdf/RRS_Resume_May_2020.pdf';

export const HomePage = () => {
  const [slide, setSlide] = useState(false);
  const tabs = [
    {
      name: 'Projects -->',
      path: '/projects',
    },
    // {
    //   name: 'Fun Facts',
    //   path: '/fun',
    // },
  ];
  return (
    <div className="homeBody fade-in">
      <div className={global.isMobile ? 'centertext-mobile' : 'centertext'}>
        <h1 className={global.isSmaller && !global.isMobile ? 'text center-small' : 'text'}>Hi, my name is Ralfi.</h1>
        <div className="m-5" />
        <p className={global.isSmaller && !global.isMobile ? 'text center-small' : 'text'}>
          I develop great looking mobile & web apps.
        </p>
        <div className="m-10" />
        <div className="flexRow">
          <code>
            {'<'}
            <a href={global.isMobile ? resume : '/#/resume'} rel="noopener noreferrer">
              Resume
            </a>
            {'/>'}
          </code>
          <div style={{ width: '10px' }} />
          <code>
            {'<'}
            <a href="mailto:ralfisalhon@gmail.com">Contact</a>
            {'/>'}
          </code>
        </div>
        {global.isMobile && (
          <div>
            <div className="m-20" />
            <div className="footer-mobile">
              <div className="social" onClick={() => window.open('https://www.linkedin.com/in/ralfisalhon/')}>
                <img src={LinkedInLogo} alt="LinkedIn Logo" />
              </div>
              <div className="social w-5" onClick={() => window.open('https://github.com/ralfisalhon')}>
                <img src={GithubLogo} alt="Github Logo" />
              </div>
              <div
                className="social w-5"
                onClick={() => window.open('https://open.spotify.com/user/pnoig1591pjau15ah9ja412k6')}
              >
                <img src={SpotifyLogo} alt="Spotify Logo" />
              </div>
              <div
                className="social w-5"
                onClick={() =>
                  window.open('https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber')
                }
              >
                <img src={YoutubeLogo} alt="Youtube Logo" />
              </div>
            </div>

            <div className={slide ? 'tabs slide-right' : 'tabs'}>
              {tabs.map((tab) => (
                <p
                  onClick={() => {
                    setSlide(true);
                    setTimeout(() => {
                      window.location.href = '#' + tab.path;
                    }, 1000);
                  }}
                  className="text tab"
                >
                  {tab.name}
                </p>
              ))}
            </div>

            <p className="text smaller" style={{ position: 'absolute', bottom: 20 }}>
              ps. this website is best experienced on desktop
            </p>
          </div>
        )}
      </div>
      {!global.isMobile && (
        <div>
          <div className="base">
            <div className="item item-1">
              <Link className="no-border" to="/projects/coverlove">
                <img className="round_icon" alt="app_icon" src={coverlove} />
                <p className="text small m--5">coverlove</p>
              </Link>
            </div>
            <div className="item item-2">
              <Link className="no-border" to="/projects/jamblr">
                <img className="round_icon" alt="app_icon" src={jamblr} />
                <p className="text small m--5">Jamblr</p>
              </Link>
            </div>
            <div className="item item-3">
              <Link className="no-border" to="/projects/polysentry">
                <img className="round_icon" alt="app_icon" src={polysentry} />
                <p className="text small m--5">PolySentry</p>
              </Link>
            </div>
            <div className="item item-4">
              <Link className="no-border" to="/projects/redorblue">
                <img className="round_icon" alt="app_icon" src={redorblue} />
                <p className="text small m--5">Red or Blue</p>
              </Link>
            </div>
            <div className="item item-5">
              <Link className="no-border" to="/projects/potencia">
                <img className="round_icon" alt="app_icon" src={potencia} />
                <p className="text small m--5">Potencia</p>
              </Link>
            </div>
            <div className="item item-6">
              <Link className="no-border" to="/projects/hearo">
                <img className="round_icon" alt="app_icon" src={hearo} />
                <p className="text small m--5">Hearo</p>
              </Link>
            </div>
            <div className="item item-7">
              <Link className="no-border" to="/projects/tunewise">
                <img className="round_icon" alt="app_icon" src={tunewise} />
                <p className="text small m--5">TuneWise</p>
              </Link>
            </div>
            <div className="item item-8">
              <Link className="no-border" to="/projects/igurme">
                <img className="round_icon" alt="app_icon" src={igurme} />
                <p className="text small m--5">iGurme</p>
              </Link>
            </div>
          </div>
          <div className="after-spin">
            <p className="text">Hi, and welcome to my website!</p>
            <div className="m-5" />
            <p className="text">
              My name is Ralfi, and I'm a <span className="coral">passionate</span> developer.
            </p>
            <div className="m-5" />
            <p className="text">
              I care most about becoming the best developer I can be, and to work with great engineers who I can learn
              something new from every day.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
