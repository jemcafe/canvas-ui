import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import Brush from '../_Settings/Brush';
import Mode from '../_Settings/Mode';
import Opacity from '../_Settings/Opacity';

function PaintBrush () {
  return (
    <Aux>
      <ToolPresets />
      <Brush />
      <Mode />
      <Opacity />
    </Aux>
  );
}

export default PaintBrush;