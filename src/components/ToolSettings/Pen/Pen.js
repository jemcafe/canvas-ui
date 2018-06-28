import React from 'react';

function Pen () {
  return (
    <ul className="settings pen-settings">
      <li className="tool">
        <div>
          <i className="icon-pen"></i>
          <i className="icon-angle-down"></i>
        </div>
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