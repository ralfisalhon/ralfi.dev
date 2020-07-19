import React, { Component } from 'react';
import './projects.css';
import Line from '../../components/Line';
import { Link } from 'react-router-dom';

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <Link className="no-border" to={'/projects'}>
          <h1 className="cursor">Projects</h1>
        </Link>
        <div className="m-5" />
        <h3 className="subtitle">My favourite pastime</h3>
        <Line />
      </div>
    );
  }
}

export default ProjectsPage;
