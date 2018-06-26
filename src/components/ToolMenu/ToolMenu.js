import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTool } from '../../redux/reducer/tools/actions';

function ToolMenu (props) {
  const { selectTool } = props;

  return (
    <div className="tool-menu">
      <ul className="menu">
        <li className="tool" onClick={() => selectTool('move')}><i className="move"></i></li>
        <li className="tool" onClick={() => selectTool('eyedropper')}><i className="eyedropper"></i></li>
        <li className="tool" onClick={() => selectTool('paintBrush')}><i className="paint-brush"></i></li>
        <li className="tool" onClick={() => selectTool('eraser')}><i className="eraser"></i></li>
        <li className="tool" onClick={() => selectTool('fill')}><i className="fill"></i></li>
        <li className="tool" onClick={() => selectTool('pen')}><i className="pen"></i></li>
        <li className="tool" onClick={() => selectTool('magnify')}><i className="magnify"></i></li>
        <li className="color">
          <div className="two" onClick={() => selectTool('eyedropper')}></div>
          <div className="one" onClick={() => selectTool('eyedropper')}></div>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = { selectTool };

export default connect(mapStateToProps, mapDispatchToProps)(ToolMenu);