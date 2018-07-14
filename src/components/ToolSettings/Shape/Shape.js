import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import ShapeType from '../_Settings/ShapeType';
import ShapeStyle from '../_Settings/ShapeStyle';

function Shape () {
  return (
    <Aux>
      <ToolPresets icon={'icon-shape-circle'} />
      <ShapeType />
      <ShapeStyle />
    </Aux>
  );
}

export default Shape;