import React, { Component } from 'react';
import Panel from '../Panel/Panel';

class PanelGroup extends Component {
  constructor () {
    super();
    this.state = { isCollapsed: false }
  }

  toggleCollapse = () => {
    this.setState(prev => ({ isCollapsed: !prev.isCollapsed }));
  }

  render () {
    const { isCollapsed } =this.state;
    const { panels: p } = this.props;

    const panels = p.map(e => (
      <Panel className={e.className} tabs={e.tabs} isCollapsed={isCollapsed}>
        { e.children }
      </Panel>
    ));

    return (
      <div className="panel-group">
        <div>
          { !isCollapsed 
          ? <div onClick={ this.toggleCollapse }><i className="icon-angle-double-right"></i></div>
          : <div onClick={ this.toggleCollapse }><i className="icon-angle-double-left"></i></div> }
        </div>
        <div className="container">
          { panels }
        </div>
      </div>
    );
  }
}

export default PanelGroup;