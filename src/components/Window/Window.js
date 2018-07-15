import React, { Component } from 'react';

class Window extends Component {
  constructor () {
    super();
    this.state = {
      pos: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      dragging: false,
      focused: false
    }
  }

  componentDidMount () {
    this.initPosition();
  }

  initPosition = () => {
    const { offsetWidth, offsetHeight } = this.refs.window;
    this.setState({
      pos: {
        x: window.innerWidth/2 - offsetWidth/2,
        y: window.innerHeight/2 - offsetHeight/2
      }
    })
  }

  engage = (e) => {
    const { offsetLeft, offsetTop } = this.refs.window;
    this.setState({ 
      dragging: true,
      focused: true, 
      offset: { 
        x: e.clientX - offsetLeft, 
        y: e.clientY - offsetTop 
      } 
    });
  }

  disengage = () => {
    this.setState({ 
      dragging: false, 
      focused: false 
    });
  }

  updatePosition = (e) => {
    e.persist();  // accesses events asyncronously
    if (this.state.dragging) {
      this.setState(prev => ({ 
        pos: { 
          x: e.clientX - prev.offset.x, 
          y: e.clientY - prev.offset.y
        } 
      }));
    }
  }

  render () {
    const { name = '?', className, children } = this.props;

    const style = {
      window: {
        top: this.state.pos.y,
        left: this.state.pos.x
      }
    }

    return (
      <div ref="window" className="window" style={style.window}>
        <h5 onMouseDown={this.engage}>{ name }</h5>
        <div className={`container${className?` ${className}`:''}`}>
          { children }
        </div>
        { this.state.focused &&
        <div className="focus-overlay"
          onMouseMove={this.updatePosition} 
          onMouseUp={this.disengage}>
        </div> }
      </div>
    );
  }
}

export default Window;