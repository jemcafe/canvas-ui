import React from 'react';

import PanelGroup from './PanelGroup/PanelGroup';

import ToolBar from '../containers/ToolBarCntr';
import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import History from '../containers/HistoryCntr';
import Text from '../containers/TextCntr';
import Color from '../containers/ColorCntr';
import Layers from '../containers/LayersCntr';

function Layout (props) {
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
          <PanelGroup>
            <History />
            <Text />
          </PanelGroup>
          <PanelGroup>
            <Color />
            <Layers />
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}

export default Layout;
