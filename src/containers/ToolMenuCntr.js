import React from 'react';
import { connect } from 'react-redux';
import { selectTool } from '../redux/reducer/tools/actions';
import ToolMenu from '../components/ToolMenu/ToolMenu';

function ToolMenuCntr (props) {
  return (
    <ToolMenu selectTool={props.selectTool} />
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = { selectTool };

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenuCntr);