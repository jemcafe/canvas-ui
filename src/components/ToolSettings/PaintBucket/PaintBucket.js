import React from 'react';

function Fill () {
  return (
    <ul className="settings paint-bucket-settings">
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

export default Fill;