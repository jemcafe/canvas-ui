import React from 'react';

function PaintBrush () {
  return (
    <ul className="settings paint-brush-settings">
      <li className="radius">
        <div><div className="brush"></div>23</div>
        <button className="dropdown-btn"></button>
      </li>
      <li className="opacity">
        Opacity:&nbsp;&nbsp;
        <div className="text-input">
          <input defaultValue="100%"/>&nbsp;&nbsp;
          <button className="dropdown-btn"></button>
        </div>
      </li>
    </ul>
  );
}

export default PaintBrush;