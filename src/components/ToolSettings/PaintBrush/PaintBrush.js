import React from 'react';

function PaintBrush () {
  return (
    <ul className="settings paint-brush-settings">
      <li className="tool">
        <div className="icon"><i className="icon-paint-brush"></i></div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="brush">
        <div><div className="img"></div>23</div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="mode">
        Mode:&nbsp;&nbsp;
        <div className="text-input">
          <select>
            <option>Normal</option>
          </select>
        </div>
      </li>
      <li className="opacity">
        Opacity:
        <div className="opacity-input">
          <input defaultValue="100%"/>
          <button>
            <i className="icon-angle-down"></i>
            <div><div><input type="range" min="0" max="100"/></div></div>
          </button>
        </div>
      </li>
    </ul>
  );
}

export default PaintBrush;