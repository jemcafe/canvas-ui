import React, { Component } from 'react';

class Opacity extends Component {
  constructor () {
    super();
    this.state = { isHidden: true }
  }

  render () {
    const classNames = {
      button: !this.state.isHidden ? 'pressed' : ''
    }

    return (
      <li className="opacity">
        Opacity:
        <div className="text-input">
          <input type="text" defaultValue="100%"/>
          <button className={classNames.button} onClick={() => this.setState(prev =>({isHidden: !prev.isHidden}))}>
            <i className="icon-angle-down"></i>
          </button>
        </div>
        { !this.state.isHidden &&
        <div className="container" onMouseLeave={() => this.setState({isHidden: true})}>
          <div className="range-container">
            <input type="range" min="0" max="100"/>
          </div>
        </div> }
      </li>
    );
  }
}

export default Opacity;