import React, { Component } from 'react';
import Projects from '../components/Projects/Projects';

class ToolBarCntr extends Component {
  constructor () {
    super();
    this.state = { tab: 0 }
  }

  changeTab = (index) => {
    this.setState({ tab: index });
  }

  render () {
    const tabs = [
      { id: 1, name: 'Untitled 1', children: 'CANVAS 1' },
      { id: 2, name: 'Untitled 2', children: 'CANVAS 2' },
      { id: 3, name: 'Untitled 3', children: 'CANVAS 3' },
    ];

    return (
      <Projects 
        tabs={tabs}
        tab={this.state.tab} 
        changeTab={this.changeTab} />
    );
  }
}

export default ToolBarCntr;