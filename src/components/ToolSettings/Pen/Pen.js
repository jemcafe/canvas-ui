import React, { Fragment as Aux } from 'react';

import Tool from '../_Settings/Tool';
import ShapeType from '../_Settings/ShapeType';
import ShapeStyle from '../_Settings/ShapeStyle';

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