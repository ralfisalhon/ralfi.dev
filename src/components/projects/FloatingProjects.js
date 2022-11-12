import React, { useCallback, useState } from 'react';
import './styles.css';
import { Base, Item, RoundIcon } from './styles.js';

import PROJECTS from 'assets/data/projects';

// const getLink = name => {
//   const proj = PROJECTS.find(proj => proj.name === name);
//   return proj.platforms.appstore || proj.platforms.github;
// };

export const FloatingProjects = ({ isPaused, setIsPaused }) => {
  const [someAnimationState, setSomeAnimationState] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(100);
  const [numClicksGreater, setNumClicksGreater] = useState(0);
  const [preventClicks, setPreventClicks] = useState(false);

  const handleOnClickProject = useCallback(
    index => {
      if (selectedIndex === index) {
        setSelectedIndex(-1);
        return setIsPaused(false);
      }
      setPreventClicks(true);
      setTimeout(() => {
        setPreventClicks(false);
      }, 500);
      if (selectedIndex < index || index === 0) {
        setNumClicksGreater(numClicksGreater + 1);
      }
      setSomeAnimationState(2 + numClicksGreater - index * 0.125 - 0.125);
      setIsPaused(true);
      setSelectedIndex(index);
      // const el = document.getElementById('base');
      // el.classList.remove('base');
      // void el.offsetHeight; /* trigger reflow */
      // el.classList.add('base');

      // const el2 = document.getElementById('item');
      // el2.classList.remove('item');
      // void el2.offsetHeight; /* trigger reflow */
      // el2.classList.add('item');
    },
    [numClicksGreater, selectedIndex, setIsPaused]
  );
  return (
    <>
      {/* <button onClick={() => setIsPaused(false)}>unpause</button> */}
      <Base
        className="base"
        someAnimationState={someAnimationState}
        isPaused={isPaused}
        id="base"
        selectedIndex={selectedIndex}
      >
        {PROJECTS.map((project, index) => (
          <Item
            someAnimationState={someAnimationState}
            isPaused={isPaused}
            className={`item item-${index + 1} ${
              selectedIndex === index ? 'drop-glow' : ''
            }`}
            key={index}
            index={index}
            id="item"
            selected={selectedIndex === index}
          >
            <div
              onClick={() => !preventClicks && handleOnClickProject(index)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RoundIcon
                className="round_icon"
                alt="app_icon"
                src={project.logo}
              />
              <p className={`text small m--${index + 1}`}>{project.name}</p>
            </div>
          </Item>
        ))}
      </Base>
    </>
  );
};
