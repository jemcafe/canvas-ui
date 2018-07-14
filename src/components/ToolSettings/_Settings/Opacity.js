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

  handleTextChange = (value) => {
    const isValid = /^([0-9%]){1,}$/.test(value);
    
    if (isValid || !value.length) {
      this.setState({ input: value });
    }
  }

  handleRangeChange = (value) => {
    const input = `${value}%`;
    this.setState({ input });
    this.props.updateOpacity(input);
  }

  handleBlur = () => {
    this.setState(prev => {
      let input = prev.input;
      const checkStr = /^([0-9]){1,}([%]){0,1}$/.test(input);
      const isValid = checkStr && (parseInt(input, 10) <= 100);

      if ( isValid ) {
        // Every character after the first '%' is removed. n is hoisted.
        const n = input.indexOf('%');
        input = input.substring(0, n !== -1 ? n+1 : input.length);
        
        if (n ===  0) input = this.props.tool.opacity;
        if (n === -1) input = `${input}%`;

      } else {
        console.log('Invalid opacity input');
        input = this.props.tool.opacity;
      }

      this.props.updateOpacity(input);
      return { input };
    })
  }

  render () {
    const classNames = {
      button: this.state.isHidden ? 'dropdown-btn' : 'dropdown-btn-pressed'
    }

    return (
      <li className="opacity">
        Opacity:
        <div className="text-input">
          <input type="text" value={this.state.input} onChange={(e) => this.handleTextChange(e.target.value)} onBlur={ this.handleBlur }/>
          <div className={classNames.button} onClick={() => this.setState(prev =>({isHidden: !prev.isHidden}))}>
            <i className="icon-angle-down"></i>
          </div>
        </div>
        { !this.state.isHidden &&
        <div className="container" onMouseLeave={() => this.setState({isHidden: true})}>
          <div className="range-container">
            <input type="range" min="0" max="100" onChange={(e) => this.handleRangeChange(e.target.value)}/>
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