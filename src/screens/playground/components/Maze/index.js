import React, { useState, useEffect } from 'react';
import './maze.css';
const squareSize = 20;

export default function Maze(props) {
  const { height, width } = props;
  const numSquaresWide = (width / squareSize) | 0;
  const numSquaresTall = (height / squareSize) | 0;
  let squares = make2DArray(numSquaresWide, numSquaresTall);
  const [maze, setMaze] = useState(printMaze(squares));

  // useEffect(() => {
  //   setMaze(printMaze(squares));
  // }, [squares]);

  function printMaze(arr) {
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

        row.push(
          <div key={j} className={className}>
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

  function removeWall() {
    let temp = squares;
    temp[0][0].borders[1] = false;
    temp[0][1].borders[3] = false;
    setMaze(printMaze(temp));
  }

  return (
    <div>
      {maze}
      tall:{numSquaresTall} wide:{numSquaresWide}
      <button onClick={() => removeWall()}>
        <h1>HEY</h1>
      </button>
    </div>
  );
}
