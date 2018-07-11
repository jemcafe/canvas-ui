import React, { Fragment as Aux } from 'react';

import Tool from '../Settings/Tool';
import ShapeType from '../Settings/ShapeType';
import ShapeStyle from '../Settings/ShapeStyle';

function Pen () {
  return (
    <Aux>
      <Tool />
      <ShapeType />
      <ShapeStyle />
    </Aux>
  );
}

export default Pen;