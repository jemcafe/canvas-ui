import React, { Fragment as Aux } from 'react';

import Tool from '../Settings/Tool';
import SampleSize from '../Settings/SampleSize';

function Eyedropper () {
  return (
    <Aux>
      <Tool />
      <SampleSize />
    </Aux>
  );
}

export default Eyedropper;