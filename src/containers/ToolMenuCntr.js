import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTool } from '../redux/reducer/tools/actions';

import ToolMenu from '../components/ToolMenu/ToolMenu';

class ToolMenuCntr extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
      <ToolMenu selectTool={ this.props.selectTool }/>
    );
  }
}

const mapStateToProps = state => ({
  tool: state.tool
});

const mapDispatchToProps = { selectTool };

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenuCntr);