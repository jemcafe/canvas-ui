import React, { Component } from 'react';
import ToolMenu from './containers/ToolMenuCntr';
import ToolSettings from './containers/ToolSettingsCntr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolSettings />
        <ToolMenu />
      </div>
    );
  }
}

export default App;
