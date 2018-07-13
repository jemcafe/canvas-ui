import React from 'react';

function ToolBar ({ options: o }) {
  console.log(o);

  return (
    <div id="toolbar">
      <ul>
        { o.length > 0 && o.map((e, i) => (
          <li>
            <div className="content-container">
              <ul className="content">
                { e.options.map((e, i) => (
                <li key={i}>{ e }</li>
                )) }
              </ul>
            </div>
            <div className="option-name">
              { e.name }
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default ToolBar;