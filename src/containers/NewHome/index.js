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

import RESUME from 'assets/pdf/RRS_Resume_Feb_2022.pdf';
import PROJECTS from 'assets/data/projects';

export const NewHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const eyFn = function (e) {
      switch (e.keyCode) {
        case 37:
          setIndex(prev => Math.max(prev - 1, 0));
          break;
        case 39:
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
      <Wrapper>
        <Name index={index} onClick={() => setIndex(0)}>
          ralfi.dev <p style={{ color: '#2d3436' }}>WIP</p>
        </Name>
        <Words>
          <Word
            index={0}
            currentIndex={index}
            selected={index === 0}
            onClick={() => setIndex(0)}
            width={50}
            visible
          >
            <span
              role="img"
              aria-label=""
              style={{ lineHeight: 1, marginRight: '10px' }}
            >
              🔎
            </span>
          </Word>

          <Word
            index={1}
            currentIndex={index}
            selected={index === 1}
            onClick={() => setIndex(1)}
            width={122}
            color="white"
          >
            Resume,
          </Word>
          <Word
            index={2}
            currentIndex={index}
            selected={index === 2}
            onClick={() => setIndex(2)}
            width={125}
            color="white"
          >
            Projects,
          </Word>
          <Word
            index={3}
            currentIndex={index}
            selected={index === 3}
            onClick={() => setIndex(3)}
            width={122}
            color="white"
          >
            Contact,
          </Word>
          <Word
            index={4}
            currentIndex={index}
            selected={index === 4}
            onClick={() => setIndex(4)}
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
                  href={proj.platforms.github}
                  rel="noopener noreferrer"
                  target="_blank"
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
        </Content>
      </Wrapper>
    </Main>
  );
};
