import React from 'react';

function Settings ({ tool }) {
  return (
    <ul className="setting">
      <Brush tool={tool} />
      <Mode tool={tool} />
      <Opacity tool={tool} />
      <SampleSize tool={tool} />
      <Select tool={tool} />
      <ShapeStyle tool={tool} />
      <ShapeType tool={tool} />
      <ToolPresets tool={tool} />
      <Zoom tool={tool} />
    </ul>
  );
}

export default Settings;