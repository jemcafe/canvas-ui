import React, { Fragment as Aux } from 'react';

import ToolPresets from '../_Settings/ToolPresets';
import Zoom from '../_Settings/Zoom';

function Magnify () {
  return (
    <Aux>
      <ToolPresets />
      <Zoom />
    </Aux>
  );
}

export default Magnify;