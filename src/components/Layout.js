import React from 'react';

// Property values for Panel
import tabGroups from '../tabs/tabs';

// Components
import ToolBar from '../containers/ToolBarCntr';
// import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import Projects from '../containers/ProjectsCntr';
import Panel from '../containers/PanelCntr';

function Layout () {
  return (
    <div id="app-layout">
      <ToolBar />
      <section>
        <ToolSettings />
      </section>
      <div id="workspace">
        <section>
          <Panel side={'L'} tools={true} isCollapsed={true} />
        </section>
        <div id="documents">
          <Projects />
        </div>
        <section className="panels">
          <Panel side={'R'} tabGroups={tabGroups['1']} isCollapsed={true} />
          <Panel side={'R'} tabGroups={tabGroups['2']} />
        </section>
      </div>
    </div>
  );
}

export default Layout;
