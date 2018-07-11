import React, { Component } from 'react';

class Tool extends Component {
  constructor () {
    super();
    this.state = { isHidden: true }
  }

  render () {
    const classNames = {
      button: !this.state.isHidden ? 'pressed' : ''
    }

    return (
      <li className="tool">
        <div className="tool-select" onClick={() => this.setState(prev =>({isHidden: !prev.isHidden}))}>
          <div className="icon"><i className="icon-eraser"></i></div>
          <button className={classNames.button}>
            <i className="icon-angle-down"></i>
          </button>
          { !this.state.isHidden && 
          <div className="container" onMouseLeave={() => this.setState({isHidden: true})}>
            BRUSHES
          </div> }
        </div>
      </li>
    );
  }
}

export default Tool;