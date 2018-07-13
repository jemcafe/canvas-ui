import React, { Component } from 'react';

class ShapeStyle extends Component {
  constructor () {
    super();
    this.state = { isHidden: true }
  }

  render () {
    const classNames = {
      button: this.state.isHidden ? 'dropdown-btn' : 'dropdown-btn-pressed'
    }

    return (
      <li className="shape-style">
        Fill:&nbsp;
        <div className="color"></div>
        &nbsp;
        Stroke:&nbsp;
        <div className="color"></div>
        
        <div className="stroke-width">
          <div className="text-input">
            <input type="text" defaultValue="5px"/>
            <div className={classNames.button} onClick={() => this.setState(prev =>({isHidden: !prev.isHidden}))}>
              <i className="icon-angle-down"></i>
            </div>
          </div>
        </div>
        { !this.state.isHidden &&
        <div className="container" onMouseLeave={() => this.setState({isHidden: true})}>
          <div className="range-container">
            <input type="range" min="0" max="2000"/>
          </div>
        </div> }
        
        <div className="stroke-options">
          STROKE OPTIONS
        </div>
      </li>
    );
  }
}

export default ShapeStyle;