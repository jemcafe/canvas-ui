import React from 'react';
import OpacityInput from '../OpacityInput';

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
        Opacity: <OpacityInput />
      </li>
    </ul>
  );
}

export default PaintBrush;