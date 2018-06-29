import React from 'react';

function Move () {
  return (
    <ul className="settings move-settings">
      <li className="tool">
        <div className="icon"><i className="icon-move"></i></div>
        <div><i className="icon-angle-down"></i></div>
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