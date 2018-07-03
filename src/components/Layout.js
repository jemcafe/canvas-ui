import React from 'react';

// Components
import ToolBar from '../containers/ToolBarCntr';
import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';

import PanelGroup from './PanelGroup/PanelGroup';

import History from '../containers/Tabs/HistoryCntr';
import Character from '../containers/Tabs/CharacterCntr';
import Paragraph from '../containers/Tabs/ParagraphCntr';
import Color from '../containers/Tabs/ColorCntr';
import Swatches from '../containers/Tabs/SwatchesCntr';
import Layers from '../containers/Tabs/LayersCntr';

function Layout () {
  const panels = {
    '1': [
      {
        // className: 'history',
        tabs: ['History'],
        children: <History />
      },
      {
        // className: 'text',
        tabs: ['Character','Paragraph'],
        children: [<Character />, <Paragraph />]
      }
    ],
    '2': [
      {
        // className: 'color',
        tabs: ['Color', 'Swatches'],
        children: [<Color />, <Swatches />]
      },
      {
        // className: 'layers',
        tabs: ['Layers'],
        children: <Layers />
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
          <PanelGroup panels={panels['1']} />
          <PanelGroup panels={panels['2']} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
