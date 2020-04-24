import React, { useState } from 'react';
import './servicenow.css';
import Line from '../../components/Line';

export default function ServiceNowPage() {
  const [data, setData] = useState([]);
  const [sortkey, setSortkey] = useState('title');
  const [sortdirection, setSortdirection] = useState(false);

  function compare(a, b) {
    let completedA;
    let completedB;
    if (typeof sortkey === 'boolean') {
      completedA = a[sortkey].toString();
      completedB = b[sortkey].toString();
    } else {
      completedA = a[sortkey];
      completedB = b[sortkey];
    }

    let comparison = 0;
    if (completedA > completedB) {
      comparison = sortdirection ? 1 : -1;
    } else if (completedA < completedB) {
      comparison = sortdirection ? -1 : 1;
    }
    return comparison;
  }

  function sort(newkey) {
    if (newkey === sortkey) setSortdirection(!sortdirection);
    setSortkey(newkey);

    data.sort(compare);
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i]);
    }
    setData(result);
  }

  const renderTableData = data.map((item) => {
    const { userId, id, title, completed } = item;
    return (
      <tr key={id}>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td className="box-container">
          <div className={completed ? 'box completed' : 'box'}></div>
        </td>
      </tr>
    );
  });

  function renderTableHeader() {
    if (data.length === 0) return;
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return (
        <th key={index}>
          <div className="row">
            {key.toUpperCase()}
            <div className="sort" onClick={() => sort(key)} />
          </div>
        </th>
      );
    });
  }

  if (data.length === 0) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1 className="cursor">To Do Table V2</h1>
      <div className="m-5" />
      <h3 className="subtitle">Hey Craig, I gave it another go!</h3>
      <Line />
      <table className="servicenow-table">
        <tr>{renderTableHeader()}</tr>
        <tbody>{renderTableData}</tbody>
      </table>
    </div>
  );
}
