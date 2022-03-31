import React, { useEffect, useState } from 'react';
import {
  Main,
  Words,
  Word,
  Name,
  Wrapper,
  Content,
  SocialButtons,
  InfoBox,
} from './styles';

import LinkedInLogo from 'assets/svg/linkedin.svg';
import YoutubeLogo from 'assets/svg/youtube.svg';
import GithubLogo from 'assets/svg/github.svg';
import SpotifyLogo from 'assets/svg/spotify.svg';
import MAGGLASS from 'assets/images/magglass.png';
import LEFTARROW from 'assets/images/leftarrow.png';

import RESUME from 'assets/pdf/RRS_Resume_Feb_2022.pdf';
import PROJECTS from 'assets/data/projects';

const isMobile = window.innerWidth < 700;

export const NewHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const eyFn = function (e) {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37: // Left Arrow
        case 16: // Shift
          setIndex(prev => Math.max(prev - 1, 0));
          break;
        case 39: // Right Arrow
        case 13: // Enter
          setIndex(prev => Math.min(prev + 1, 4));
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', eyFn);
    return () => document.removeEventListener('keydown', eyFn);
  });

  return (
    <Main>
      {isMobile ? (
        <InfoBox style={{ fontSize: '1rem' }}>
          The new ralfi.dev isn't ready for mobile yet.
          <span>
            <br />
            Contact:
            <a
              href="mailto:ralfisalhon@gmail.com"
              style={{ marginLeft: '5px' }}
            >
              <strong>ralfisalhon@gmail.com</strong>
            </a>
          </span>
        </InfoBox>
      ) : (
        <Wrapper>
          <Name index={index} onClick={() => setIndex(0)}>
            ralfi.dev
          </Name>
          <Words>
            <Word
              index={0}
              currentIndex={index}
              selected={index === 0}
              onClick={() => setIndex(0)}
              width={40}
              visible
            >
              <img
                alt={index === 0 ? 'Magnifying Glass' : 'Left Arrow'}
                src={index === 0 ? MAGGLASS : LEFTARROW}
                style={{
                  lineHeight: 1,
                  margin: 0,
                  height: '1.5rem',
                  marginRight: '8px',
                }}
              />
            </Word>

            <Word
              index={1}
              currentIndex={index}
              selected={index === 1}
              onClick={() => setIndex(index !== 1 ? 1 : 0)}
              width={105}
              color="white"
            >
              Resume,
            </Word>
            <Word
              index={2}
              currentIndex={index}
              selected={index === 2}
              onClick={() => setIndex(index !== 2 ? 2 : 0)}
              width={102}
              color="white"
            >
              Projects,
            </Word>
            <Word
              index={3}
              currentIndex={index}
              selected={index === 3}
              onClick={() => setIndex(index !== 3 ? 3 : 0)}
              width={100}
              color="white"
            >
              Contact,
            </Word>
            <Word
              index={4}
              currentIndex={index}
              selected={index === 4}
              onClick={() => setIndex(index !== 4 ? 4 : 0)}
              width={50}
              color="white"
            >
              Fun
            </Word>
          </Words>
          <Content>
            {index === 1 && (
              <InfoBox>
                <a href={RESUME} target="_blank" rel="noopener noreferrer">
                  View
                </a>
                <p style={{ userSelect: 'none' }}>|</p>
                <a href={RESUME} download>
                  Download
                </a>
              </InfoBox>
            )}
            {index === 2 && (
              <InfoBox>
                {PROJECTS.map(proj => (
                  <a
                    key={proj.name}
                    href={proj.platforms.appstore || proj.platforms.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={proj.name}
                  >
                    <img src={proj.logo} alt={proj.name}></img>
                  </a>
                ))}
              </InfoBox>
            )}
            {index === 3 && (
              <InfoBox>
                <a href="mailto:ralfisalhon@gmail.com">ralfisalhon@gmail.com</a>
              </InfoBox>
            )}
            {index === 4 && <InfoBox>WIP</InfoBox>}
            <SocialButtons>
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/ralfisalhon/')
                }
                title="LinkedIn"
              />
              <img
                src={GithubLogo}
                alt="Github Logo"
                onClick={() => window.open('https://github.com/ralfisalhon')}
                title="Github"
              />
              <img
                src={SpotifyLogo}
                alt="Spotify Logo"
                onClick={() =>
                  window.open(
                    'https://open.spotify.com/user/pnoig1591pjau15ah9ja412k6'
                  )
                }
                title="Spotify"
              />
              <img
                src={YoutubeLogo}
                alt="Youtube Logo"
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber'
                  )
                }
                title="Youtube"
              />
            </SocialButtons>
          </Content>
        </Wrapper>
      )}
    </Main>
  );
};
