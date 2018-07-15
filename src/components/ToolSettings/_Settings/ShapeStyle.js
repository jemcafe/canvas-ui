import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShapeStyle extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      input: this.props.tool.strokeWidth,
      isHidden: true 
    }
  }

  toggleDropdown = (e) => {
    this.setState(prev => ({ isHidden: !prev.isHidden }));
  }

  hideDropdown = () => {
    this.setState({ isHidden: true });
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    let isValid = /^([0-9a-z]){1,}$/.test(value);
    isValid = isValid || !value.length;
    
    if (isValid) this.setState({ input: value });
  }

  handleRangeChange = (e) => {
    const { updateStrokeWidth } = this.props;
    const value = `${e.target.value}px`;
    this.setState({ input: value });
    updateStrokeWidth(value);
  }

  confirmInput = () => {
    const { tool, updateStrokeWidth } = this.props;
    this.setState(prev =>{
      let input = prev.input;
      let isValid = /^([0-9]){1,}([px]){0,2}$/;           // Valid characters
      isValid = isValid.test(input);
      isValid = isValid && (parseInt(input, 10) <= 2000); // Less than or equal to 2000px
      const p = isValid && input.indexOf('p');            // First 'p' char
      const x = isValid && input.indexOf('x');            // First 'x' char
      isValid = isValid && (p !== 0 && x > p );           // 'p' is not the first char and 'x' follows after 'p'

      if (isValid) {

        // Every character after the first 'px' is removed.
        input = input.substring(0, p !== -1 ? p+2 : input.length);
        if (p === -1) input = `${input}px`;

      } else {
        input = tool.strokeWidth;
      }

      updateStrokeWidth(input);
      return { input };
    })
  }

  render () {
    const { input, isHidden } = this.state;
    const { tool } = this.props;

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

            <input type="text" value={input}
              onChange={ this.handleTextChange } 
              onFocus={ this.hideDropdown }
              onKeyPress={(e) => e.charCode === 13 && this.confirmInput()}
              onBlur={ this.confirmInput }/>

            <button className={classNames.button} onClick={ this.toggleDropdown }>
              <i className="icon-angle-down"></i>
            </button>

          </div>
          { !isHidden &&
          <div className="dropdown-container" onMouseLeave={ this.hideDropdown }>

            <div className="range-container">
              <input type="range" min="0" max="2000" value={parseInt(tool.strokeWidth, 10)}
                onChange={ this.handleRangeChange }
                onBlur={ this.hideDropdown }/>
            </div>

          </div> }
        </div>
        
        <div className="stroke-options">
          STROKE OPTIONS
        </div>
      </li>
    );
  }
}

ShapeStyle.propTypes = {
  tool: PropTypes.object.isRequired,
  updateStrokeWidth: PropTypes.func.isRequired
}

export default ShapeStyle;