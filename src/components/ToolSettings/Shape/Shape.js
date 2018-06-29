import React from 'react';

function Shape () {
  return (
    <ul className="settings shape-settings">
      <li className="tool">
        <div className="icon"><i className="icon-shape-circle"></i></div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="type">
        Type:&nbsp;&nbsp;
        <select defaultValue="Path">
          <option>Shape</option>
          <option>Path</option>
          <option>Pixels</option>
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

export default Shape;