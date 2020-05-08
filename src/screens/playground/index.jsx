import React, { useState } from 'react';
import './styles.css';
import Line from '../../components/Line';

import Clickable from './components/Clickable';
import Maze from './components/Maze';
import NavBar from './components/NavBar';

export default function PlaygroundPage() {
  const [fill, setFill] = useState(false);
  return (
    <div>
      <h1>Playground</h1>
      <div className="m-5" />
      <h3 className="subtitle">This page is me having fun</h3>
      <Line />
      {/* <h2 className="text">React Components</h2> */}
      <div className="m-20" />
      <div>
        {/* <div className="playground-container">
          <Clickable filled={fill} onClick={() => setFill(!fill)} color="coral" />
          <div className="m-20-left" />
        </div> */}
        {/* <div className="playground-container">
          <NavBar title="ralfi.dev" routes={['Home', 'Resume', 'Projects', 'Playground', 'Fun Facts']} />
        </div> */}
        <Maze height={window.innerHeight / 2} width={window.innerWidth / 2} />
      </div>
    </div>
  );
}
