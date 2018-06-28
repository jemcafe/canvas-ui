import React from 'react';
import PropTypes from 'prop-types';

import Move from './Move/Move';
import Eyedropper from './Eyedropper/Eyedropper';
import PaintBrush from './PaintBrush/PaintBrush';
import Eraser from './Eraser/Eraser';
import PaintBucket from './PaintBucket/PaintBucket';
import Pen from './Pen/Pen';
import Shape from './Shape/Shape';
import Magnify from './Magnify/Magnify';

function ToolSettings ({ tools }) {
  return (
    <div className="tool-settings">
      { tools.move.selected && <Move /> }
      { tools.eyedropper.selected && <Eyedropper /> }
      { tools.paintBrush.selected && <PaintBrush /> }
      { tools.eraser.selected && <Eraser /> }
      { tools.paintBucket.selected && <PaintBucket /> }
      { tools.pen.selected && <Pen /> }
      { tools.shape.selected && <Shape /> }
      { tools.magnify.selected && <Magnify /> }
      {/* <Move />
      <Eyedropper />
      <PaintBrush />
      <Eraser />
      <PaintBucket />
      <Pen />
      <Shape />
      <Magnify /> */}
    </div>
  );
}

ToolSettings.propTypes = {
  tools: PropTypes.object.isRequired
}

export default ToolSettings;