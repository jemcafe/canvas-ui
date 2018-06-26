import React from 'react';

function Pen () {
  return (
    <ul className="settings pen-settings">
      <li className="type">
        Type:&nbsp;&nbsp;
        <select defaultValue="Path">
          <option>Shape</option>
          <option>Path</option>
        </select>
      </li>
    </ul>
  );
}

export default Pen;