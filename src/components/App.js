import React, { Component } from 'react';
import ToolMenu from '../containers/ToolMenuCntr';
import ToolSettings from '../containers/ToolSettingsCntr';
import Panels from '../containers/PanelsCntr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolSettings />
        <section className="body">
          <ToolMenu />
          <Panels />
        </section>
      </div>
    );
  }
}

export default App;
