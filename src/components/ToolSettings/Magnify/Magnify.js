import React from 'react';

function Magnify () {
  return (
    <ul className="settings magnify-settings">
      <li className="tool">
        <div>
          <i className="icon-magnify"></i>
          <i className="icon-angle-down"></i>
        </div>
      </li>
      <li className="zoom">
        <div className="plus"><i className="icon-magnify-plus"></i></div>
        <div className="minus"><i className="icon-magnify-minus"></i></div>
      </li>
    </ul>
  );
}

export default Magnify;