import React from 'react';

function Eyedropper () {
  return (
    <ul className="settings brush-settings">
      <li className="sample-size">
        Sample Size:&nbsp;&nbsp;
        <select>
          <option>Point Sample</option>
          <option>3 by 3 average</option>
          <option>5 by 5 average</option>
          <option>11 by 11 average</option>
          <option>31 by 31 average</option>
          <option>51 by 51 average</option>
          <option>101 by 101 average</option>
        </select>
      </li>
    </ul>
  );
}

export default Eyedropper;