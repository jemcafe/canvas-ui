import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import SampleSize from '../_Settings/SampleSize';

function Eyedropper () {
  return (
    <Aux>
      <ToolPresets />
      <SampleSize />
    </Aux>
  );
}

export default Eyedropper;