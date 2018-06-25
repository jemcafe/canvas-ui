import React, { Component } from 'react';
// import Sketcher from './containers/SketcherCntr';
// import ColorGradient from './containers/ColorGradientCntr';
import ToolMenu from './containers/ToolMenuCntr';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Sketcher /> */}
        <ToolMenu />
        APP
      </div>
    );
  }
}

export default App;
