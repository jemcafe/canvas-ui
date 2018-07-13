import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToolBar from '../components/ToolBar/ToolBar';

class ToolBarCntr extends Component {
  constructor (props) {
    super(props);
    this.state = {
      options: this.props.options || []
    }
  }

  render () {
    return (
      <ToolBar options={this.state.options} />
    );
  }
}

ToolBarCntr.propTypes =  {
  options: PropTypes.array
}

export default ToolBarCntr;