import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import ShapeType from '../_Settings/ShapeType';
import ShapeStyle from '../_Settings/ShapeStyle';

function Pen () {
  return (
    <Aux>
      <ToolPresets />
      <ShapeType />
      <ShapeStyle />
    </Aux>
  );
}

export default Pen;