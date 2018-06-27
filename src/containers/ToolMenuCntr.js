import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTool } from '../redux/reducer/tools/actions';

import ToolMenu from '../components/ToolMenu/ToolMenu';

class ToolMenuCntr extends Component {
  render () {
    const { props } = this;

    return (
      <ToolMenu {...props}/>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { selectTool };

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenuCntr);