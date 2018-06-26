import React from 'react';
// Components
import Move from './Move/Move';
import Eyedropper from './Eyedropper/Eyedropper';
import PaintBrush from './PaintBrush/PaintBrush';
import Eraser from './Eraser/Eraser';
import PaintBucket from './PaintBucket/PaintBucket';
import Pen from './Pen/Pen';
import Shape from './Shape/Shape';
import Magnify from './Magnify/Magnify';

function ToolSettings () {
  return (
    <div className="tool-settings">
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