import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import Opacity from '../_Settings/Opacity';

function Fill (props) {
  const { tool, updateOpacity } = props;

  return (
    <Aux>
      <ToolPresets icon={'icon-paint-bucket'} />
      <Opacity tool={tool} updateOpacity={updateOpacity} />
    </Aux>
  );
}

export default Fill;