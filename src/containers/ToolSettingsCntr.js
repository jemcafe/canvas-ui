import React from 'react';
import { connect } from 'react-redux';
// Component
import ToolSettings from '../components/ToolSettings/ToolSettings';

function ToolMenuCntr (props) {
  return (
    <ToolSettings tools={ props.tools } />
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ToolMenuCntr);