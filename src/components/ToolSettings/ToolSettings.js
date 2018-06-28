import React from 'react';
// import PropTypes from 'prop-types';

import Move from './Move/Move';
import Eyedropper from './Eyedropper/Eyedropper';
import PaintBrush from './PaintBrush/PaintBrush';
import Eraser from './Eraser/Eraser';
import PaintBucket from './PaintBucket/PaintBucket';
import Pen from './Pen/Pen';
import Shape from './Shape/Shape';
import Magnify from './Magnify/Magnify';

function ToolSettings (props) {
  const { 
    move, 
    eyedropper, 
    paintBrush, 
    eraser, 
    paintBucket, 
    pen, 
    shape, 
    magnify 
  } = props.tools;

  return (
    <div className="tool-settings">
      {/* { move.selected && <Move /> }
      { eyedropper.selected && <Eyedropper /> }
      { paintBrush.selected && <PaintBrush /> }
      { eraser.selected && <Eraser /> }
      { paintBucket.selected && <PaintBucket /> }
      { pen.selected && <Pen /> }
      { shape.selected && <Shape /> }
      { magnify.selected && <Magnify /> } */}
      <Move />
      <Eyedropper />
      <PaintBrush />
      <Eraser />
      <PaintBucket />
      <Pen />
      <Shape />
      <Magnify />
    </div>
  );
}

export default ToolSettings;