import React from 'react';

function Eraser () {
  return (
    <ul className="settings eraser-settings">
      <li className="tool">
        <div className="icon"><i className="icon-eraser"></i></div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="brush">
        <div><div className="img"></div>23</div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="mode">
        Mode:&nbsp;&nbsp;
        <div className="text-input">
          <select defaultValue="Brush">
            <option>Brush</option>
          </select>
        </div>
      </li>
      <li className="opacity">
        Opacity:
        <div className="text-input-dropdown">
          <input defaultValue="100%"/>
          <div><i className="icon-angle-down"></i></div>
        </div>
      </li>
    </ul>
  );
}

export default Eraser;