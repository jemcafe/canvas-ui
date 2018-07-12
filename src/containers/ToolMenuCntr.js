import React from 'react';

import { connect } from 'react-redux';
import { selectTool } from '../redux/reducer/tools/actions';
import { swapColors } from '../redux/reducer/color/actions';

import ToolMenu from '../components/ToolMenu/ToolMenu';

function ToolMenuCntr (props) {
  return (
    <ToolMenu 
      isCollapsed={props.isCollapsed}
      selectTool={props.selectTool} 
      swapColors={props.swapColors} 
      tools={props.tools}
      color={props.color} />
  );
}

const mapStateToProps = (state) => ({
  tools: state.tools,
  color: state.color,
});

const mapDispatchToProps = { 
  selectTool,
  swapColors
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenuCntr);