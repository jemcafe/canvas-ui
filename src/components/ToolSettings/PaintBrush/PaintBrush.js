import React, { Fragment } from 'react';

import Tool from '../Tool';
import Brush from '../Brush';
import Mode from '../Mode';
import Opacity from '../Opacity';

function PaintBrush () {
  return (
    <Fragment>
      <Tool />
      <Brush />
      <Mode />
      <Opacity />
    </Fragment>
  );
}

export default PaintBrush;