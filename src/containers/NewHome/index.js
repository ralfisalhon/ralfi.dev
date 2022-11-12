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
  Emoji,
} from './styles';

import LinkedInLogo from 'assets/svg/linkedin.svg';
import YoutubeLogo from 'assets/svg/youtube.svg';
import GithubLogo from 'assets/svg/github.svg';
import SpotifyLogo from 'assets/svg/spotify.svg';
import MAGGLASS from 'assets/images/magglass.png';
import LEFTARROW from 'assets/images/leftarrow.png';

import RESUME from 'assets/pdf/RRS_Resume_Feb_2022.pdf';
import './gradient.css';
import ResumePage from 'components/resume';
import { FloatingProjects } from 'components/projects';

const isMobile = window.innerWidth < 700;

const RESUME_LOAD_DELAY = 150;

export const NewHome = () => {
  const [index, setIndex] = useState(3);
  const [showResume, setShowResume] = useState(false);
  const [resumeHeight, setResumeHeight] = useState(window.innerHeight * 1.25);
  const [resumeLoaded, setResumeLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsPaused(false);
  }, [index]);

  useEffect(() => {
    setShowResume(false);
  }, [index]);

  useEffect(() => {
    const keydownFunction = function (e) {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37: // Left Arrow
          // case 16: // Shift
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
    document.addEventListener('keydown', keydownFunction);
    return () => document.removeEventListener('keydown', keydownFunction);
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
        <Wrapper
          height={index === 1 && showResume ? 90 : 20}
          animationDelay={index === 1 && showResume ? RESUME_LOAD_DELAY : 50}
          isPaused={isPaused}
        >
          <Name index={index} onClick={() => setIndex(0)}>
            ralfi.dev
          </Name>
          <div className="gradient-border" style={{ width: '525px' }}>
            <Words index={index}>
              <Word
                index={0}
                currentIndex={index}
                selected={index === 0}
                onClick={() => setIndex(0)}
                width={40}
                visible
              >
                <Emoji
                  index={index}
                  alt={index === 0 ? 'Magnifying Glass' : 'Left Arrow'}
                  src={index === 0 ? MAGGLASS : LEFTARROW}
                  style={{
                    lineHeight: 1,
                    margin: 0,
                    height: '1.5rem',
                    marginRight: index > 1 ? '0px' : '8px',
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
                Resume
              </Word>
              <Word
                index={2}
                currentIndex={index}
                selected={index === 2}
                onClick={() => setIndex(index !== 2 ? 2 : 0)}
                width={102}
                color="white"
              >
                Contact
              </Word>
              <Word
                index={3}
                currentIndex={index}
                selected={index === 3}
                onClick={() => setIndex(index !== 3 ? 3 : 0)}
                width={100}
                color="white"
                style={{ position: 'relative' }}
              >
                Projects
              </Word>
              {index === 3 && (
                <div className="fade-in">
                  <FloatingProjects
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                  />
                </div>
              )}
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
          </div>
          <Content>
            {index === 1 && (
              <div style={{ userSelect: 'none' }}>
                <InfoBox
                  style={{
                    opacity: showResume && resumeLoaded ? '0.3' : '1',
                    transition: '500ms',
                  }}
                >
                  <p
                    style={{
                      cursor: 'pointer',
                      textDecorationLine: showResume ? 'underline' : 'none',
                      textDecorationColor: 'var(--light-color)',
                    }}
                    onClick={() => {
                      if (!showResume) {
                        setTimeout(() => {
                          setResumeLoaded(true);
                        }, RESUME_LOAD_DELAY);
                      }
                      setShowResume(prev => !prev);
                    }}
                  >
                    View
                  </p>
                  <p style={{ userSelect: 'none' }}>|</p>
                  <a href={RESUME} download>
                    Download
                  </a>
                </InfoBox>
                {showResume && (
                  <InfoBox className="fade-in" style={{ marginTop: '10px' }}>
                    <p style={{ userSelect: 'none' }}>{'>'} </p>
                    <p
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        setResumeHeight(prev =>
                          Math.max(prev - window.innerHeight * 0.2, 650)
                        )
                      }
                    >
                      Smaller
                    </p>
                    <p style={{ userSelect: 'none' }}>|</p>
                    <p
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        setResumeHeight(prev =>
                          Math.min(
                            prev + window.innerHeight * 0.2,
                            window.innerHeight * 2
                          )
                        )
                      }
                    >
                      Bigger
                    </p>
                  </InfoBox>
                )}
              </div>
            )}
            {index === 2 && (
              <InfoBox>
                <a href="mailto:ralfisalhon@gmail.com">ralfisalhon@gmail.com</a>
              </InfoBox>
            )}
            {index === 3 && (
              <InfoBox style={{ color: 'gray' }}>
                <a
                  href="https://github.com/ralfisalhon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github://ralfisalhon
                </a>
              </InfoBox>
            )}
            {index === 4 && (
              <InfoBox style={{ color: 'gray' }}>
                {`// 🚜 Under construction`}
              </InfoBox>
            )}
            {!isPaused && (
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
            )}
          </Content>
          {index === 1 && showResume && <ResumePage height={resumeHeight} />}
        </Wrapper>
      )}
    </Main>
  );
};
