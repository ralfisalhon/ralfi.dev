/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './navbar.css';
import PropTypes from 'prop-types';

function NavBar(props) {
  const { title, routes } = props;
  const [route, setRoute] = useState('/');
  return (
    <div className="navbar">
      <h1 className="text navbar-title" onClick={() => setRoute('/')}>
        {title.concat(route)}
      </h1>
      <div className="routes">
        {routes &&
          routes.map((r) => (
            <div
              className="navbar-item"
              onClick={() => (r === 'Home' ? setRoute('/') : setRoute('/'.concat(r.split(' ')[0].toLowerCase())))}
            >
              <p className="text small navbar-text">{r}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
