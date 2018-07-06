import React from 'react';

// Components
import ToolBar from '../containers/ToolBarCntr';
import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';

import PanelGroup from '../containers/PanelGroupCntr';

import History from '../containers/PanelContent/HistoryCntr';
import Character from '../containers/PanelContent/CharacterCntr';
import Paragraph from '../containers/PanelContent/ParagraphCntr';
import Color from '../containers/PanelContent/ColorCntr';
import Swatches from '../containers/PanelContent/SwatchesCntr';
import Layers from '../containers/PanelContent/LayersCntr';

function Layout () {
  const panels = {
    '1': [
      {
        id: 1,
        tabs: ['History'],
        children: <History />,
        tab: 0,
        isHidden: true
      },
      {
        id: 2,
        tabs: ['Character','Paragraph'],
        children: [<Character key={1} />, <Paragraph key={2} />],
        tab: 0,
        isHidden: true
      }
    ],
    '2': [
      {
        id: 1,
        tabs: ['Color', 'Swatches'],
        children: [<Color key={1} />, <Swatches key={2} />],
        tab: 0,
        isHidden: true
      },
      {
        id: 2,
        tabs: ['Layers'],
        children: <Layers />,
        tab: 0,
        isHidden: true
      }
    ]
  };

  return (
    <div id="app-layout">
      <ToolBar />
      <section>
        <ToolSettings />
      </section>
      <div id="workspace">
        <section>
          <ToolMenu />
        </section>
        <div className="canvas-space">
          CANVAS SPACE
        </div>
        <section className="panels">
          <PanelGroup panels={panels['1']} />
          <PanelGroup panels={panels['2']} />
        </section>
      </div>
    </div>
  );
}

export default Layout;
