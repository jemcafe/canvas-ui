import React, { Component } from 'react';

class Opacity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true,
      input: this.props.tool.opacity,
      rangeInput: this.props.tool.opacity
    }
  }

  handleTextChange = (value) => {
    const checkInput = /^([0-9%]){1,}$/;
    const isValid = checkInput.test(value);

    if (isValid || !value.length) {
      this.setState({ input: value });
    }
  }

  handleRangeChange = (value) => {
    const input = `${value}%`;
    this.setState({ input: input });
    this.props.updateOpacity(input);
  }

  handleBlur = () => {
    this.setState(prev => {
      let input = prev.input;
      const checkInput = /^([0-9]){1,}%$/;
      const isValid = checkInput.test(input);

      if ( isValid ) {
        if (!input.length || input === '%') {
          input = '0%';
        } else if (input.length < 3) {
          input = `${input.slice(0, 1)}%`;
        } else {
          input = `${input.slice(0, prev.input.length-1)}%`;
        }
      } else {
        input = prev.rangeInput;
      }

      this.props.updateOpacity(input);
      return { input: input, rangeInput: input };
    })
  }

  render () {
    const { tool, updateOpacity } = this.props;

    const classNames = {
      button: this.state.isHidden ? 'dropdown-btn' : 'dropdown-btn-pressed'
    }

    console.log('input: ',this.state.input);
    console.log('rangeInput: ',this.state.rangeInput);

    return (
      <li className="opacity">
        Opacity:
        <div className="text-input">
          <input type="text" value={this.state.input} onChange={(e) => this.handleTextChange(e.target.value)} onBlur={(e) => this.handleBlur()}/>
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

export default Opacity;