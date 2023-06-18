import React, { useState, useCallback } from 'react';
import {
  Wrapper,
  Splash,
  ButtonWrapper,
  Button,
  SocialButtons,
  // RefreshContainer,
  InfoWrapper,
  Projects,
  Resume,
  ProjLinks,
  Awards,
  ProjScreenshots,
  ProjVideo,
  Logo,
  HeaderRow,
  SelectedProj,
} from './styles';

import LinkedInLogo from 'assets/svg/linkedin.svg';
import YoutubeLogo from 'assets/svg/youtube.svg';
import GithubLogo from 'assets/svg/github.svg';
import SpotifyLogo from 'assets/svg/spotify.svg';

// import RefreshLogo from 'assets/svg/refresh.svg';
// import SunLogo from 'assets/svg/sun.svg';

import PROJECTS from 'assets/data/projects';
import RESUME from 'assets/pdf/RRS_Resume_June_2023.pdf';

import { Fun } from 'components/Fun';

import './home.css';

const PLATFORM_CONVERSIONS = {
  github: 'GitHub',
  playstore: 'Play Store',
  appstore: 'App Store',
  website: 'Website',
};

const COLORS = [
  { fg: '#f2f2f2', bg: '#181818', darkBg: true },
  { fg: '#f2f2f2', bg: '#16a085', darkBg: false },
  { fg: '#f2f2f2', bg: '#f39c12', darkBg: false },
  { fg: '#f2f2f2', bg: '#27ae60', darkBg: false },
  { fg: '#f2f2f2', bg: '#d35400', darkBg: false },
  { fg: '#f2f2f2', bg: '#2980b9', darkBg: false },
  { fg: '#f2f2f2', bg: '#c0392b', darkBg: false },
  { fg: '#f2f2f2', bg: '#8e44ad', darkBg: false },
  { fg: '#f2f2f2', bg: '#2c3e50', darkBg: false },
];

const IS_MOBILE = window.innerWidth <= 1200 || window.innerHeight < 600;

const getRandomNumber = (min, max) => {
  let randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
};

export const Home = () => {
  const [lightMode, setLightMode] = useState(false);
  // const [pressed, setPressed] = useState(false);
  const [randNumber, setRandNumber] = useState(
    getRandomNumber(0, COLORS.length - 1)
  );
  const [color, setColor] = useState(COLORS[0]);
  const [selected, setSelected] = useState();
  const [selectedProj, setSelectedProj] = useState();

  const handleKeyPress = e => {
    e.persist();
    if (e.key === ' ') {
      setLightMode(!lightMode);
    }
  };

  const handleRefresh = useCallback(() => {
    // setPressed(true);
    // setTimeout(() => setPressed(false), 250);
    let newRand = randNumber;
    while (newRand === randNumber)
      newRand = getRandomNumber(0, COLORS.length - 1);
    setRandNumber(newRand);
    setColor(COLORS[newRand]);
  }, [randNumber]);

  const handleSelectedTab = id => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  console.log({ color, selectedProj });

  if (!color) return null;
  return (
    <div onKeyPress={handleKeyPress} tabIndex="0" style={{ outline: 'none' }}>
      <Wrapper fgColor={color.fg} bgColor={color.bg} lightMode={lightMode}>
        <Splash>
          {/* <RefreshContainer>
            <img
              className={`pointer rotate ${pressed ? 'down' : ''}`}
              src={RefreshLogo}
              alt="Refresh Logo"
              onClick={() => handleRefresh()}
            />
            <img
              src={SunLogo}
              alt="Sun Logo"
              className="pointer"
              onClick={() => setLightMode(!lightMode)}
            />
          </RefreshContainer> */}
          <h1>Ralfi Salhon</h1>
          <ButtonWrapper>
            <Button
              selected={selected === 'resume'}
              onClick={() => handleSelectedTab('resume')}
            >
              Resume
            </Button>
            <p> / </p>
            <Button
              selected={selected === 'projects'}
              onClick={() => {
                handleSelectedTab('projects');
                setSelectedProj(null);
              }}
            >
              Projects
            </Button>
            <p> / </p>
            <Button
              selected={selected === 'contact'}
              onClick={() => handleSelectedTab('contact')}
            >
              Contact
            </Button>
            <p> / </p>
            <div
              onMouseEnter={() => handleRefresh()}
              onClick={() => setLightMode(false)}
            >
              <Button
                selected={selected === 'fun'}
                onClick={() => handleSelectedTab('fun')}
              >
                Fun
              </Button>
            </div>
          </ButtonWrapper>
          {selected && (
            <InfoWrapper
              fgColor={color.fg}
              bgColor={color.bg}
              lightMode={lightMode}
            >
              {selected === 'resume' && (
                <Resume lightMode={lightMode}>
                  <p>
                    <a href={RESUME} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                    <a href={RESUME} download>
                      Download
                    </a>
                  </p>
                </Resume>
              )}
              {selected === 'projects' && (
                <>
                  <Projects lightMode={lightMode}>
                    {PROJECTS?.map(proj => (
                      <p
                        key={proj.name}
                        style={{
                          // color:
                          //   (lightMode || selectedProj?.name === proj.name) &&
                          //   color.bg !== proj.color
                          //     ? proj.color
                          //     : undefined,
                          cursor: 'pointer',
                          fontWeight:
                            selectedProj?.name === proj.name ? '900' : '400',
                        }}
                        onClick={() => {
                          setColor(color => ({ ...color, bg: proj.color }));
                          setSelectedProj(proj);
                        }}
                      >
                        {proj.name}
                      </p>
                    ))}
                  </Projects>
                  {selectedProj && (
                    <SelectedProj>
                      <HeaderRow>
                        <p>{selectedProj.name}</p>
                        {!IS_MOBILE && (
                          <Logo>
                            <img src={selectedProj.logo} alt="logo" />
                          </Logo>
                        )}
                        <div>
                          <Awards>
                            {selectedProj?.awards?.map(award => (
                              <span key={award}>
                                <p>
                                  {'🏆'} {award}
                                </p>
                              </span>
                            ))}
                          </Awards>
                          <ProjLinks color={color.bg}>
                            {Object.keys(selectedProj.platforms).map(
                              platform => (
                                <a
                                  key={platform}
                                  href={selectedProj.platforms[platform]}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  {PLATFORM_CONVERSIONS[platform]}
                                </a>
                              )
                            )}
                          </ProjLinks>
                        </div>
                      </HeaderRow>
                      <ProjScreenshots>
                        {selectedProj.screenshots?.map(screenshot => (
                          <img
                            key={screenshot}
                            alt="Project Screenshot"
                            src={screenshot}
                            style={{
                              marginBottom: IS_MOBILE ? '10px' : '0px',
                            }}
                          />
                        ))}
                      </ProjScreenshots>

                      <ProjVideo>
                        {selectedProj?.video && (
                          <iframe
                            title="video"
                            src={selectedProj?.video}
                            frameBorder="0"
                          />
                        )}
                      </ProjVideo>
                    </SelectedProj>
                  )}
                </>
              )}
              {selected === 'contact' && (
                <center>
                  <p>
                    <a href="mailto:ralfisalhon@gmail.com">
                      ralfisalhon@gmail.com
                    </a>
                  </p>
                </center>
              )}
              {selected === 'fun' && (
                <span>
                  <Fun
                    lightMode={lightMode}
                    bgColor={color.bg}
                    fgColor={color.fg}
                  />
                </span>
              )}
            </InfoWrapper>
          )}
          <SocialButtons>
            <img
              src={LinkedInLogo}
              alt="LinkedIn Logo"
              onClick={() =>
                window.open('https://www.linkedin.com/in/ralfisalhon/')
              }
            />
            <img
              src={GithubLogo}
              alt="Github Logo"
              onClick={() => window.open('https://github.com/ralfisalhon')}
            />
            <img
              src={SpotifyLogo}
              alt="Spotify Logo"
              onClick={() =>
                window.open(
                  'https://open.spotify.com/user/pnoig1591pjau15ah9ja412k6'
                )
              }
            />
            <img
              src={YoutubeLogo}
              alt="Youtube Logo"
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber'
                )
              }
            />
          </SocialButtons>
        </Splash>
      </Wrapper>
    </div>
  );
};
