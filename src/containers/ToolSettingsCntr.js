import React from 'react';
import { connect } from 'react-redux';
import ToolSettings from '../components/ToolSettings/ToolSettings';

function ToolSettingsCntr (props) {
  return (
    <ToolSettings tools={props.tools} />
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ToolSettingsCntr);