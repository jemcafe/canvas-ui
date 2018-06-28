import React from 'react';

function Pen () {
  return (
    <ul className="settings pen-settings">
      <li className="tool">
        <i className="pen"></i>
        <i className="angle-down"></i>
      </li>
      <li className="type">
        Type:&nbsp;&nbsp;
        <select defaultValue="Path">
          <option>Shape</option>
          <option>Path</option>
        </select>
      </li>
      <li className="fill">
        Fill:&nbsp;&nbsp;
        <div className="color"></div>
      </li>
      <li className="stroke">
        Stroke:&nbsp;&nbsp;
        <div className="color"></div>
      </li>
    </ul>
  );
}

export default Pen;