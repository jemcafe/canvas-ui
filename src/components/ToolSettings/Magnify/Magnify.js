import React from 'react';

function Magnify () {
  return (
    <ul className="settings magnify-settings">
      <li className="tool">
        <i className="magnify"></i>
        <i className="angle-down"></i>
      </li>
      <li className="zoom">
        <div className="plus"><i className="magnify-plus"></i></div>
        <div className="minus"><i className="magnify-minus"></i></div>
      </li>
    </ul>
  );
}

export default Magnify;