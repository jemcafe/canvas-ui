import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Opacity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true,
      input: this.props.tool.opacity
    }
  }

  toggleDropdown = () => {
    this.setState(prev => ({ isHidden: !prev.isHidden }));
  }

  hideDropdown = () => {
    this.setState({ isHidden: true });
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    let isValid = /^([0-9%]){1,}$/.test(value);
    isValid = isValid || !value.length;
    
    if (isValid) {
      this.setState({ input: value });
    }
  }

  handleRangeChange = (e) => {
    const { updateOpacity } = this.props;
    const input = `${e.target.value}%`;
    this.setState({ input });
    updateOpacity(input);
  }

  confirmInput = () => {
    const { tool, updateOpacity } = this.props;
    this.setState(prev => {
      let input = prev.input;
      let isValid = /^([0-9]){1,}([%]){0,1}$/.test(input);
      isValid = isValid && (parseInt(input, 10) <= 100);

      if (isValid) {
        // Every character after the first '%' is removed. n is hoisted.
        const n = input.indexOf('%');
        input = input.substring(0, n !== -1 ? n+1 : input.length);
        
        if (n ===  0) input = tool.opacity;
        if (n === -1) input = `${input}%`;

      } else {
        console.log('Invalid opacity input');
        input = tool.opacity;
      }

      updateOpacity(input);
      return { input };
    })
  }

  render () {
    const { isHidden, input } = this.state;
    const { tool } = this.props;

    const classNames = {
      button: isHidden ? 'dropdown-btn' : 'dropdown-btn-pressed'
    }

    return (
      <li className="opacity" onBlur={ this.hideDropdown }>
        Opacity:
        <div className="text-input">
          <input type="text" value={input} onChange={ this.handleTextChange } onFocus={ this.hideDropdown } onBlur={ this.confirmInput } />
          <button className={classNames.button} onClick={ this.toggleDropdown } onBlur={(e) => { e.stopPropagation(); }}>
            <i className="icon-angle-down"></i>
          </button >
        </div>
        { !isHidden &&
        <div className="container">
          <div className="range-container">
            <input type="range" min="0" max="100" value={parseInt(tool.opacity, 10)} onChange={ this.handleRangeChange }/>
          </div>
        </div> }
      </li>
    );
  }
}

Opacity.propTypes = {
  tool: PropTypes.object.isRequired,
  updateOpacity: PropTypes.func.isRequired
}

export default Opacity;