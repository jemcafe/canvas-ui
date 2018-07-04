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

export default Fill;