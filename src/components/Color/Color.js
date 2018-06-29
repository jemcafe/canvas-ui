import React from 'react';
import Panel from '../Panel/Panel';

function Color () {
  return (
    <Panel className={"color"} tabs={['Color', 'Swatches']}>
      <div>COLOR CONTENT</div>
      <div>SWATCHES CONTENT</div>
    </Panel>
  );
}

export default Color;