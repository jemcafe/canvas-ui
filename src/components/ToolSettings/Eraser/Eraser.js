import React from 'react';
import OpacityInput from '../OpacityInput';

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
        Opacity: <OpacityInput />
      </li>
    </ul>
  );
}

export default Eraser;