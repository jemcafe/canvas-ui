import React from 'react';

function Shape () {
  return (
    <ul className="settings shape-settings">
      <li className="tool">
        <div>
          <i className="icon-shape-circle"></i>
          <i className="icon-angle-down"></i>
        </div>
      </li>
      <li className="type">
        Type:&nbsp;&nbsp;
        <select defaultValue="Path">
          <option>Shape</option>
          <option>Path</option>
          <option>Pixels</option>
        </select>
      </li>
    </ul>
  );
}

export default Shape;