import React, { Fragment as Aux } from 'react';

import Tool from '../Settings/Tool';
import Brush from '../Settings/Brush';
import Mode from '../Settings/Mode';
import Opacity from '../Settings/Opacity';

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