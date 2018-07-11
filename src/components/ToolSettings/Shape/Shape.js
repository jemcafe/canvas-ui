import React, { Fragment } from 'react';

import Tool from '../Tool';
import ShapeType from '../ShapeType';
import ShapeStyle from '../ShapeStyle';

function Shape () {
  return (
    <Fragment>
      <Tool />
      <ShapeType />
      <ShapeStyle />
    </Fragment>
  );
}

export default Shape;