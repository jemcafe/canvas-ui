import React from 'react';
import Panel from '../Panel/Panel';

function Text () {
  return (
    <Panel className={"text"} tabs={['Character', 'Paragraph']}>
      <div>CHARACTER CONTENT</div>
      <div>PARAGRAPH CONTENT</div>
    </Panel>
  );
}

export default Text;