/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './clickable.css';
import PropTypes from 'prop-types';
const squareSize = 20;

class Maze extends Component {
  printMaze = (squares) => {
    let returned = [];
    for (let i = 0; i < squares.length; i++) {
      let row = [];
      console.log('square is', squares[i]);
      for (let j = 0; j < squares[i].length; j++) {
        row.push(<h1>HEY</h1>);
        console.log('inside is', squares[i][j]);
      }
      returned.push(row);
    }

    console.log(returned);

    return (
      <div>
        {returned.map((item) => (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {item.map((i) => (
              <div
                style={{
                  height: squareSize + 'px',
                  width: squareSize + 'px',
                  border: i != null ? '1px solid black' : '1px solid red',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { height, width } = this.props;
    const numSquaresWide = (width / squareSize) | 0;
    const numSquaresTall = (height / squareSize) | 0;
    console.log(numSquaresWide, numSquaresTall);
    let squares = new Array(numSquaresTall);
    for (var i = 0; i < squares.length; i++) {
      squares[i] = new Array(numSquaresWide);
    }

    squares[10][10] = true;
    console.log('AFTER true', squares);
    return (
      <div>
        {this.printMaze(squares)}
        tall:{numSquaresTall} wide:{numSquaresWide}
      </div>
    );
  }
}

Maze.propTypes = {
  text: PropTypes.string.isRequired,
  filled: PropTypes.bool,
  color: PropTypes.string,
  press: PropTypes.func,
};

Maze.defaultProps = {
  text: 'Maze',
  filled: false,
  color: 'var(--dark-color)',
};

export default Maze;
