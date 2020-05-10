import React, { useState, useEffect } from 'react';
import './maze.css';
const squareSize = 50;
const timeoutWait = 10;
let visited = [];

export default function Maze(props) {
  const { height, width } = props;
  const numSquaresWide = (width / squareSize) | 0;
  const numSquaresTall = (height / squareSize) | 0;
  let squares = make2DArray(numSquaresWide, numSquaresTall);
  const [maze, setMaze] = useState(makeMaze(squares));

  useEffect(() => {
    createMaze(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function make2DArray(width, height) {
    let arr = new Array(height);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(width);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = {
          borders: [true, true, true, true],
          position: [0, 0],
          visited: false,
          text: ' ',
        };
      }
    }
    return arr;
  }

  function makeMaze(arr) {
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
        className += item.visited ? 'visited ' : '';

        row.push(
          <div key={j} className={className} style={{ height: squareSize, width: squareSize }}>
            {item.text}
          </div>
        );
      }
      render.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return render;
  }

  function getAvailableDirections(i, j) {
    let directions = [];
    if (j !== 0 && !squares[i][j - 1].visited) {
      directions.push('left');
    }
    if (j !== numSquaresWide - 1 && !squares[i][j + 1].visited) {
      directions.push('right');
    }
    if (i !== 0 && !squares[i - 1][j].visited) {
      directions.push('up');
    }
    if (i !== numSquaresTall - 1 && !squares[i + 1][j].visited) {
      directions.push('down');
    }

    return directions;
  }

  function createMaze(i, j) {
    let directions = getAvailableDirections(i, j);
    squares[i][j].visited = true;

    if (directions.length === 0 || (i === 0 && j === numSquaresWide - 1)) {
      if (visited.length === 0) {
        setMaze(makeMaze(squares));
        console.log('DONE!');
        return;
      }
      // let goto = visited.pop();
      let goto = visited.shift();
      createMaze(goto[0], goto[1]);
      return;
    }

    if (directions.length > 1) {
      visited.push([i, j]);
    }

    let direction = directions[Math.floor(Math.random() * directions.length)];

    if (direction === 'down') {
      squares[i][j].borders[2] = false;
      squares[i + 1][j].borders[0] = false;
      setMaze(makeMaze(squares));
      setTimeout(() => createMaze(i + 1, j), timeoutWait);
      return;
    }
    if (direction === 'up') {
      squares[i][j].borders[0] = false;
      squares[i - 1][j].borders[2] = false;
      setMaze(makeMaze(squares));
      setTimeout(() => createMaze(i - 1, j), timeoutWait);
      return;
    }
    if (direction === 'right') {
      squares[i][j].borders[1] = false;
      squares[i][j + 1].borders[3] = false;
      setMaze(makeMaze(squares));
      setTimeout(() => createMaze(i, j + 1), timeoutWait);
      return;
    }
    if (direction === 'left') {
      squares[i][j].borders[3] = false;
      squares[i][j - 1].borders[1] = false;
      setMaze(makeMaze(squares));
      setTimeout(() => createMaze(i, j - 1), timeoutWait);
      return;
    }
  }

  return maze;
}
