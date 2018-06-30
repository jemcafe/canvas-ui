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

function ToolSettings ({ tools: t }) {
  return (
    <div className="tool-settings">

      { t.move.selected && <Move /> }
      { t.eyedropper.selected && <Eyedropper /> }
      { t.paintBrush.selected && <PaintBrush /> }
      { t.eraser.selected && <Eraser /> }
      { t.paintBucket.selected && <PaintBucket /> }
      { t.pen.selected && <Pen /> }
      { t.shape.selected && <Shape /> }
      { t.magnify.selected && <Magnify /> }

      <div className="workspace-presets">
        <select defaultValue="Essentials">
          <option>Essentials</option>
          <option>Graphic and Web</option>
          <option>Photography</option>
          <option>Painting</option>
          <option>Motion</option>
          <option>3D</option>
        </select>
      </div>
    </div>
  );
}

ToolSettings.propTypes = {
  tools: PropTypes.object.isRequired
}

export default ToolSettings;