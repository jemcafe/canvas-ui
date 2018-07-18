import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircleCursor from './CircleCursor';

class HueGradient extends Component {

  componentDidMount () {
    this.props.initCanvas(this.refs);
  }

  render () {
    const { 
      state:{ color, mouse, focus, inCanvas }, 
      engage, 
      disengage, 
      getColor, 
      handleHueChange,
      updateMousePosition,
      detectCanvas 
    } = this.props;

    console.log(inCanvas, focus);

    return (
      <div ref="container" className="hue-gradient" style={{display:'flex',height:'100%'}}>
        <div ref="colors" className="colors">
          <div className="color-block"><div><div style={{ background: color.hex }}></div></div></div>
          <div className="color-block"><div><div style={{ background: color.hex }}></div></div></div>
        </div>
        
        <div ref="wrapper" className="gradient-wrapper">
          { focus &&
          <div className="focus-overlay"
            onMouseMove={(e) => getColor(this.refs.canvas, e)}
            onMouseUp={() => disengage(this.refs.canvas)}
            onMouseLeave={() => disengage(this.refs.canvas)}>
          </div> }
          
          <canvas ref="touch" className="touch-overlay"
            onMouseDown={(e) => engage(this.refs.canvas, e)}
            onMouseMove={(e) => updateMousePosition(e)}
            onMouseOver={() => detectCanvas(true)}
            onMouseLeave={() => detectCanvas(false)}/>

          { (inCanvas || focus) && 
          <CircleCursor mouse={mouse} zIndex={0} /> }

          <canvas ref="canvas" style={{zIndex: -2}}/>
        </div>

        <div ref="slider" className="slider-wrapper" style={{width:'30px'}}>
          <input className="slider" type="range" min="0" max={255 * 6} defaultValue="0" 
            onChange={(e) => handleHueChange(this.refs.canvas, e)}/>
        </div>
      </div>
    );
  }
}

HueGradient.propTypes = {
  state: PropTypes.object.isRequired,
  initCanvas: PropTypes.func.isRequired,
  engage: PropTypes.func.isRequired,
  disengage: PropTypes.func.isRequired,
  getColor: PropTypes.func.isRequired,
  handleHueChange: PropTypes.func.isRequired,
  updateMousePosition: PropTypes.func.isRequired,
}

export default HueGradient;