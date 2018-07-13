import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import Opacity from '../_Settings/Opacity';

function Fill () {
  return (
    <Aux>
      <ToolPresets icon={'icon-paint-bucket'} />
      <Opacity />
    </Aux>
  );
}

export default Fill;