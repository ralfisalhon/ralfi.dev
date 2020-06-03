// import React, { useState } from 'react';
import React from 'react';
import './styles.css';
import Line from '../../components/Line';

// import Clickable from './components/Clickable';
import Maze from './components/Maze';
import NavBar from './components/NavBar';
// import ReactSlider from 'react-slider';

export default function PlaygroundPage() {
  // const [timeout, setTimeout] = useState(0);
  return (
    <div>
      <h1>Playground</h1>
      <div className="m-5" />
      <h3 className="subtitle">
        This page is me having fun. It's always updated with new stuff I'm experimenting with.
      </h3>
      <Line />
      <div className="m-20" />
      <div>
        <div className="playground-container">
          <NavBar title="ralfi.dev" routes={['Home', 'Resume', 'Projects', 'Playground', 'Fun Facts']} />
        </div>
        <div className="playground-container">
          {/* <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb disable-selection"
            trackClassName="track"
            onAfterChange={(val) => setTimeout(val)}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          /> */}
          <Maze height={window.innerHeight * 0.55} width={window.innerWidth * 0.55} timeout={0} />
        </div>
      </div>
    </div>
  );
}
