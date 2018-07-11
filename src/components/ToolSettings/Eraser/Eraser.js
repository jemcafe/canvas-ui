import React, { Fragment as Aux } from 'react';

import Tool from '../_Settings/Tool';
import Brush from '../_Settings/Brush';
import Mode from '../_Settings/Mode';
import Opacity from '../_Settings/Opacity';

function Eraser () {
  return (
    <Aux>
      <Tool />
      <Brush />
      <Mode />
      <Opacity />
    </Aux>
  );
}

export default Eraser;