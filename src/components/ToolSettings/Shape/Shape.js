import React from 'react';

function Shape () {
  return (
    <ul className="settings shape-settings">
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