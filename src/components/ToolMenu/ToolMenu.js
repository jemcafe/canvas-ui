import React from 'react';
import PropTypes from 'prop-types';

function ToolMenu (props) {
  const { selectTool, isCollapsed } = props;

  const styles = {
    menu: !isCollapsed ? {
      display: 'flex',
      flexWrap: 'wrap',
      width: '72px'
    } : null
  }

  console.log(isCollapsed);

  return (
    <div id="tool-menu">
      <ul className="menu" style={styles.menu}>
        <li className="tool" onClick={() => selectTool('move')}><i className="icon-move"></i></li>
        <li className="tool" onClick={() => selectTool('eyedropper')}><i className="icon-eyedropper"></i></li>
        <li className="tool" onClick={() => selectTool('paintBrush')}><i className="icon-paint-brush"></i></li>
        <li className="tool" onClick={() => selectTool('eraser')}><i className="icon-eraser"></i></li>
        <li className="tool" onClick={() => selectTool('paintBucket')}><i className="icon-paint-bucket"></i></li>
        <li className="tool" onClick={() => selectTool('pen')}><i className="icon-pen"></i></li>
        <li className="tool" onClick={() => selectTool('shape')}><i className="icon-shape-circle"></i></li>
        <li className="tool" onClick={() => selectTool('magnify')}><i className="icon-magnify"></i></li>
        <li className="tool" onClick={() => selectTool('hand')}><i className="icon-hand"></i></li>
      </ul>
      <div className="color">
        <div className="two" onClick={() => selectTool('eyedropper')}></div>
        <div className="one" onClick={() => selectTool('eyedropper')}></div>
      </div>
    </div>
  );
}

ToolMenu.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool
}

export default ToolMenu;