import React, { Fragment as Aux } from 'react';

// data
import toolbarItems from '../tabs/toolbarItems';
import tabGroups from '../tabs/tabGroups';
import projects from '../tabs/projects';

// Components
import ToolBar from '../containers/ToolBarCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import Projects from '../containers/ProjectsCntr';
import Panel from '../containers/PanelCntr';

import NewProject from '../containers/NewProjectCntr';
import HueGradient from '../containers/HueGradientCntr';

function Layout () {
  return (
    <Aux>
    <div id="app-layout">
      <ToolBar items={toolbarItems}/>
      <section>
        <ToolSettings />
      </section>
      <div id="workspace">
        <section>
          <Panel side={'L'} tools={true} isCollapsed={true} />
        </section>
        <div id="documents">
          <Projects projects={projects}/>
        </div>
        <section className="panels">
          <Panel side={'R'} tabGroups={tabGroups['1']} isCollapsed={true} />
          <Panel side={'R'} tabGroups={tabGroups['2']} />
        </section>
      </div>
      <NewProject />
    </div>
    <HueGradient />
    </Aux>
  );
}

export default Layout;
