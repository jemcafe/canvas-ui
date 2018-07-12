import React from 'react';

// Property values for PanelGroup
import panels from '../panels/panels';

// Components
import ToolBar from '../containers/ToolBarCntr';
// import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import Projects from '../containers/ProjectsCntr';
import PanelGroup from '../containers/PanelGroupCntr';

function Layout () {
  return (
    <div id="app-layout">
      <ToolBar />
      <section>
        <ToolSettings />
      </section>
      <div id="workspace">
        <section>
          <PanelGroup side={'L'} tools={true} isCollapsed={true} />
        </section>
        <div id="documents">
          <Projects />
        </div>
        <section className="panels">
          <PanelGroup side={'R'} panels={panels['1']} isCollapsed={true} />
          <PanelGroup side={'R'} panels={panels['2']} />
        </section>
      </div>
    </div>
  );
}

export default Layout;
