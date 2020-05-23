import React, { useState, useEffect } from 'react';
import './maze.css';
const squareSize = 25;
let visited = [];
let addPaths = true;

export default function Maze(props) {
  const { height, width, timeout } = props;
  const numSquaresWide = (width / squareSize) | 0;
  const numSquaresTall = (height / squareSize) | 0;
  const startPos = [numSquaresTall - 1, 0];
  const endPos = [0, numSquaresWide - 1];
  let squares = make2DArray(numSquaresWide, numSquaresTall);
  const [maze, setMaze] = useState(makeMaze(squares));

  useEffect(() => {
    let id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
    console.log('squares is', squares);
    createMaze(startPos[0], startPos[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout]);

  function make2DArray(width, height) {
    let arr = new Array(height);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(width);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = {
          borders: [true, true, true, true],
          visited: false,
          text: i === startPos[0] && j === startPos[1] ? 's' : i === endPos[0] && j === endPos[1] ? 'e' : ' ',
          path: (i === startPos[0] && j === startPos[1]) || (i === endPos[0] && j === endPos[1]) ? true : false,
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
        let className = 'cell disable-selection ';
        className += item.borders[0] ? 'b-up ' : '';
        className += item.borders[1] ? 'b-right ' : '';
        className += item.borders[2] ? 'b-down ' : '';
        className += item.borders[3] ? 'b-left ' : '';
        className += item.visited ? 'visited ' : '';
        const isStartOrEnd = (i === startPos[0] && j === startPos[1]) || (i === endPos[0] && j === endPos[1]);

        row.push(
          <div key={j} className={className} style={{ height: squareSize, width: squareSize }}>
            {!addPaths && item.path && !isStartOrEnd && (
              <div id="path">
                <p>.</p>
              </div>
            )}
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
    if (i !== startPos[0] && !squares[i + 1][j].visited) {
      directions.push('down');
    }

    return directions;
  }

  function createMaze(i, j) {
    let directions = getAvailableDirections(i, j);
    squares[i][j].visited = true;

    if (directions.length === 0 || (i === endPos[0] && j === endPos[1])) {
      if (i === endPos[0] && j === endPos[1]) {
        addPaths = false;
      }
      if (visited.length === 0) {
        setMaze(makeMaze(squares));
        console.log('DONE!');
        return;
      }

      let goto = [startPos[0], startPos[1]];
      while (directions.length === 0 && visited.length > 0) {
        if (addPaths) goto = visited.pop();
        else goto = visited.shift();
        directions = getAvailableDirections(goto[0], goto[1]);
        if (addPaths) squares[goto[0]][goto[1]].path = false;
      }

      createMaze(goto[0], goto[1]);
      return;
    }

    const isAtStart = i === startPos[0] && j === startPos[1];

    if (directions.length > 0 && !isAtStart) {
      visited.push([i, j]);
      if (addPaths) squares[i][j].path = true;
    }

    setMaze(makeMaze(squares));

    let direction = directions[Math.floor(Math.random() * directions.length)];

    if (direction === 'down') {
      squares[i][j].borders[2] = false;
      squares[i + 1][j].borders[0] = false;

      setTimeout(() => createMaze(i + 1, j), timeout);
    }
    if (direction === 'up') {
      squares[i][j].borders[0] = false;
      squares[i - 1][j].borders[2] = false;
      setTimeout(() => createMaze(i - 1, j), timeout);
    }
    if (direction === 'right') {
      squares[i][j].borders[1] = false;
      squares[i][j + 1].borders[3] = false;
      setTimeout(() => createMaze(i, j + 1), timeout);
    }
    if (direction === 'left') {
      squares[i][j].borders[3] = false;
      squares[i][j - 1].borders[1] = false;
      setTimeout(() => createMaze(i, j - 1), timeout);
    }
  }

  return maze;
}
