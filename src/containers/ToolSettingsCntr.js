import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolSettings from '../components/ToolSettings/ToolSettings';

class ToolMenuCntr extends Component {
  render () {
    const { props } = this;

    return (
      <ToolSettings {...props}/>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ToolMenuCntr);