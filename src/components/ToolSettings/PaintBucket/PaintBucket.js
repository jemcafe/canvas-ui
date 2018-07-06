import React from 'react';
import OpacityInput from '../OpacityInput';

function Fill () {
  return (
    <ul className="settings paint-bucket-settings">
      <li className="tool">
        <div className="icon"><i className="icon-paint-bucket"></i></div>
        <div><i className="icon-angle-down"></i></div>
      </li>
      <li className="opacity">
        Opacity: <OpacityInput />
      </li>
    </ul>
  );
}

export default Fill;