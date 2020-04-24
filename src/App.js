import './App.css';

import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import SmallProject from './components/SmallProject';

import HomePage from './screens/home';
import ResumePage from './screens/resume';
import ProjectsPage from './screens/projects';
import PlaygroundPage from './screens/playground';
import FunFactsPage from './screens/fun';
import ServiceNowPage from './screens/servicenow';

import ScrollToTop from './assets/js/scrollToTop';

import projects from './data/projects';
global.isMobile = window.innerWidth <= 1200 || window.innerHeight < 600;
global.isSmaller = window.innerHeight <= 775;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <React.Fragment>
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
                  <Route path={'/projects/' + key} key={key}>
                    <Project project={projects[key]} />
                  </Route>
                ))}
              </Route>
              <Route exact path="/projects">
                <div className="all-projects">
                  {Object.keys(projects).map((key) => (
                    <Link className="no-border" to={'/projects/' + key} key={key}>
                      <SmallProject project={projects[key]} />
                    </Link>
                  ))}
                </div>
              </Route>
              <Route exact path="/playground" component={PlaygroundPage} />
              <Route exact path="/fun" component={FunFactsPage} />
              <Route exact path="/servicenow" component={ServiceNowPage} />
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}
