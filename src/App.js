import './App.css';

import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import SmallProject from './components/SmallProject';

import HomePage from './screens/home';
import ResumePage from './screens/resume';
import ProjectsPage from './screens/projects';
import TeachingPage from './screens/teach';
import FunFactsPage from './screens/fun';

import ScrollToTop from './scrollToTop';

import projects from './data/projects';
global.isMobile = window.innerWidth <= 1400;

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <div className="full-page">
            {!global.isMobile && (
              <div className="header">
                <Header />
              </div>
            )}
            <div className={global.isMobile ? 'content-mobile' : 'content'}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/resume" component={ResumePage} />
              <Route path="/projects">
                <ProjectsPage />
                {Object.keys(projects).map((key) => (
                  <Route path={'/projects/' + key}>
                    <Project project={projects[key]} />
                  </Route>
                ))}
              </Route>
              <Route exact path="/projects">
                <div className="all-projects">
                  {Object.keys(projects).map((key) => (
                    <Link className="no-border" to={'/projects/' + key}>
                      <SmallProject project={projects[key]} />
                    </Link>
                  ))}
                </div>
              </Route>
              <Route exact path="/teach" component={TeachingPage} />
              <Route exact path="/fun" component={FunFactsPage} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
