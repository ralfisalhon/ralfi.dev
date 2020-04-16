import React, { Component } from 'react';
import './styles.css';
import Line from '../../components/Line';
class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="cursor" onClick={() => (window.location.pathname = '/projects')}>
          Projects
        </h1>
        <div className="m-5" />
        <h3 className="subtitle">What I live to do</h3>
        <Line />
      </div>
    );
  }
}

export default ProjectsPage;
