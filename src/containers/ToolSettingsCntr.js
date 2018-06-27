import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolSettings from '../components/ToolSettings/ToolSettings';

class ToolMenuCntr extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
      <ToolSettings tools={ this.props.tools }/>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools
});

export default connect(mapStateToProps)(ToolMenuCntr);