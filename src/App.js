import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from 'containers/Home';
import { NoMatchPage } from 'containers/NoMatchPage';

import './App.css';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => {
  return (
    <BrowserRouter>
      <div className="full-page">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NoMatchPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
