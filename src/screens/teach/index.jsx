import React, { Component } from 'react';
import './styles.css';
import Line from '../../components/Line';

import Clickable from './components/clickable';
import CopyCode from '../../components/CopyCode';

class TeachingPage extends Component {
  render() {
    return (
      <div>
        <h1>Teaching Material</h1>
        <div className="m-5" />
        <h3 className="subtitle">This page is in progress...</h3>
        <Line />
        <h2 className="text">React Components</h2>
        <div className="m-20" />
        <div className="container">
          <Clickable />
          <div className="m-20-left" />
          <CopyCode />
        </div>
      </div>
    );
  }
}

export default TeachingPage;
