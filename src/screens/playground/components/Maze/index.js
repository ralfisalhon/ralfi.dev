/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './maze.css';
import PropTypes from 'prop-types';
const squareSize = 20;

const Square = {
  borders: [true, true, true, true],
  position: [0, 0],
  visited: false,
  text: '.',
};

class Maze extends Component {
  printMaze = (arr) => {
    if (!arr || arr.length === 0) return;
    let render = [];
    for (let i = 0; i < arr.length; i++) {
      let row = [];
      for (let j = 0; j < arr[i].length; j++) {
        let item = arr[i][j];
        let className = 'cell ';
        className += item.borders[0] ? 'up ' : '';
        className += item.borders[1] ? 'right ' : '';
        className += item.borders[2] ? 'down ' : '';
        className += item.borders[3] ? 'left ' : '';

        console.log(item.borders, i, j);
        row.push(<div className={className}>{item.text}</div>);
      }
      render.push(<div className="row">{row}</div>);
    }

    return render;
  };

  make2DArray = (width, height) => {
    let arr = new Array(height);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(width);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Square;
      }
    }

    return arr;
  };

  render() {
    const { height, width } = this.props;
    const numSquaresWide = (width / squareSize) | 0;
    const numSquaresTall = (height / squareSize) | 0;
    console.log(numSquaresWide, numSquaresTall);
    let squares = this.make2DArray(numSquaresWide, numSquaresTall);

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
