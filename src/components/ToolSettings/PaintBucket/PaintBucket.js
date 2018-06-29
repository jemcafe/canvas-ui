import React from 'react';

function Fill () {
  return (
    <ul className="settings paint-bucket-settings">
      <li className="tool">
        <div className="icon"><i className="icon-paint-bucket"></i></div>
        <div><i className="icon-angle-down"></i></div>
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

export default Fill;