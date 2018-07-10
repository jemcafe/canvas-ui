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
    console.log('tab', this.state.tab);

    return (
      <Projects 
        tab={this.state.tab} 
        changeTab={this.changeTab} />
    );
  }
}

export default ToolBarCntr;