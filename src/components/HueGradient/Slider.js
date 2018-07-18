import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
  constructor () {
    super();
    this.state = {
      value: 0,
      y: 0,
      offset: 0,
      boundary: { top: 0, btm: 0 },
      dragging: false,
      focus: false
    }
  }

  componentDidMount () {
    this.initSlider();
  }

  initSlider = () => {
    this.setState({
      boundary: {
        top: this.refs.handle.offsetTop,
        btm: this.refs.slider.clientHeight
      },
    });
  }

  engage = ({ nativeEvent: e }) => {
    this.setState({ 
      dragging: true, 
      focus: true,
      offset: e.clientY - this.refs.handle.offsetTop
    })
  }

  disengage = () => {
    this.setState({ dragging: false, focus: false })
  }

  updatePosition = ({ nativeEvent: e }) => {
    const { handle: h } = this.refs;
    const { min = 0, max = 0 } = this.props;
    
    if (this.state.dragging) {
      this.setState(prev => {
        let y = e.clientY - prev.offset - prev.boundary.top;
        const btm = prev.boundary.btm - h.offsetHeight;
        let value = Math.round((y * max)/btm);

        if (y < 0)   { y = 0;   value = min; }
        if (y > btm) { y = btm; value = max; }
        
        return { value, y };
      });
    }
  }

  render () {
    return (
      <div ref="slider" className="slider">
        <div ref="handle" className="handle" style={{top: this.state.y}} onMouseDown={this.engage}></div>

        { this.state.focus &&
        <div className="focus-overlay"
          onMouseMove={this.updatePosition} 
          onMouseUp={this.disengage}>
        </div> }
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default Slider;