import React from 'react';

function ToolMenu () {
  return (
    <div className="tool-menu">
      <ul className="menu">
        <li className="tool"><i className="move"></i></li>
        <li className="tool"><i className="eyedropper"></i></li>
        <li className="tool"><i className="paint-brush"></i></li>
        <li className="tool"><i className="eraser"></i></li>
        <li className="tool"><i className="fill"></i></li>
        <li className="tool"><i className="pen"></i></li>
        <li className="tool"><i className="magnify"></i></li>
        <li className="color">
          <div className="two"></div>
          <div className="one"></div>
        </li>
      </ul>
    </div>
  );
}

export default ToolMenu;