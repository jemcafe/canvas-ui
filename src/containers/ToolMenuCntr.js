import React from 'react';
import { connect } from 'react-redux';
import { selectTool } from '../redux/reducer/tools/actions';
// Component
import ToolMenu from '../components/ToolMenu/ToolMenu';

function ToolMenuCntr (props) {
  return (
    <ToolMenu tools={ props.tools } selectTool={ props.selectTool } />
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = { selectTool };

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenuCntr);