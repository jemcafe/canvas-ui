import React from 'react';
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
          <div className="one">
            <div><i className="icon-angle-double-right"></i></div>
            <div className="container">
              <History />
              <Text />
            </div>
          </div>
          <div className="two">
            <div><i className="icon-angle-double-right"></i></div>
            <div className="container">
              <Color />
              <Layers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
