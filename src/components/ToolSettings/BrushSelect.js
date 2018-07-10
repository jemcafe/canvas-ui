import React, { Component } from 'react';

class BrushSelect extends Component {
  constructor () {
    super();
    this.state = { isHidden: true }
  }

  render () {
    return (
      <div className="brush-select">
        <div><div className="img"></div>23</div>
        <button onClick={() => this.setState(prev =>({isHidden: !prev.isHidden}))}>
          <i className="icon-angle-down"></i>
        </button>
        { !this.state.isHidden && 
        <div className="container" onMouseLeave={() => this.setState({isHidden: true})}>
          BRUSHES
        </div> }
      </div>
    );
  }
}

export default BrushSelect;