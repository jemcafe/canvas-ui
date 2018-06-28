import React from 'react';

function Move () {
  return (
    <ul className="settings move-settings">
      <li className="tool">
        <div>
          <i className="icon-move"></i>
          <i className="icon-angle-down"></i>
        </div>
      </li>
      <li className="select">
        Select:&nbsp;&nbsp;
        <select defaultValue="Layer">
          <option>Group</option>
          <option>Layer</option>
        </select>
      </li>
    </ul>
  );
}

export default Move;