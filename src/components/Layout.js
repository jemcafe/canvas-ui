import React from 'react';

import PanelGroup from './PanelGroup/PanelGroup';

import ToolBar from '../containers/ToolBarCntr';
import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import History from '../containers/HistoryCntr';
import Text from '../containers/TextCntr';
import Color from '../containers/ColorCntr';
import Layers from '../containers/LayersCntr';

function Layout () {
  const panels = {
    '1': [
      {
        className: 'color',
        tabs: ['Color', 'Swatches'],
        children: null
      },
      {
        className: 'layers',
        tabs: ['Layers'],
        children: null
      }
    ],
    '2': [
      {
        className: 'history',
        tabs: ['History'],
        children: null
      },
      {
        className: 'text',
        tabs: ['Character', 'Paragraph'],
        children: null
      }
    ]
  };

  return (
    <div id="app-layout">
      <ToolBar />
      <ToolSettings />
      <div className="workspace">
        <ToolMenu />
        <div className="canvas-space">
          CANVAS SPACE
        </div>
        <div className="panels">
          <PanelGroup panels={panels['2']}/>
          <PanelGroup panels={panels['1']} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
