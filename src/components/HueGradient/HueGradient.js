import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cursor from './Cursor';
import Slider from './Slider';

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

    return (
      <div className="hue-gradient" style={{display:'flex',height:'100%'}}>
        <div className="colors">
          <div className="color-block"><div><div style={{ background: color.hex }}></div></div></div>
          <div className="color-block"><div><div style={{ background: color.hex }}></div></div></div>
        </div>
        
        <div ref="wrapper" className="gradient-wrapper" style={{flex:'1',display:'flex'}}>
          <canvas ref="canvas" className="color-canvas" style={{position: 'absolute'}}/>

          { (inCanvas || focus) && <Cursor mouse={mouse} /> }
          
          <canvas ref="touch" className="touch-overlay"
            onMouseDown={(e) => engage(this.refs.canvas, e)}
            onMouseMove={(e) => updateMousePosition(e)}
            onMouseOver={() => detectCanvas(true)}
            onMouseLeave={() => detectCanvas(false)}/>

          { focus &&
          <div className="focus-overlay"
            onMouseMove={(e) => getColor(this.refs.canvas, e)}
            onMouseUp={() => disengage(this.refs.canvas)}
            onMouseLeave={() => disengage(this.refs.canvas)}>
          </div> }
        </div>

        <div className="slider-wrapper" style={{width:'40px'}}>
          {/* <input className="slider" type="range" min="0" max={255 * 6} defaultValue="0" 
            onChange={(e) => handleHueChange(this.refs.canvas, e)}/> */}
            <Slider min={0} max={255 * 7} />
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