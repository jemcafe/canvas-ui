import React from 'react';

import { connect } from 'react-redux';
import { updateOpacity, zoom } from '../redux/reducer/tools/actions';

import ToolSettings from '../components/ToolSettings/ToolSettings';

function ToolSettingsCntr (props) {
  return (
    <ToolSettings {...props} />
  );
}

const mapStateToProps = (state) => ({
  tools: state.tools 
});

const mapDispatchToProps = {
  updateOpacity,
  zoom
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolSettingsCntr);