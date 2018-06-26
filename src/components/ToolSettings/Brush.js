import React from 'react';

function Brush () {
  return (
    <ul className="settings brush-settings">
      <li className="setting radius">
        <div><div className="brush-img"></div>23</div>
        <button className="dropdown-btn"></button>
      </li>
      <li className="setting opacity">
        Opacity:&nbsp;&nbsp;
        <div className="text-input">
          <input defaultValue="100%"/>&nbsp;&nbsp;
          <button className="dropdown-btn"></button>
        </div>
      </li>
    </ul>
  );
}

export default Brush;