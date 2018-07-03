import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel/Panel';

class PanelGroup extends Component {
  constructor () {
    super();
    this.state = { isCollapsed: false }
  }

  togglePanels = () => {
    this.setState(prev => ({ isCollapsed: !prev.isCollapsed }));
  }

  render () {
    const { isCollapsed } = this.state;
    const { panels = [] } = this.props;

    return (
      <div className="panel-group">
        <div>
          { !isCollapsed 
          ? <div onClick={ this.togglePanels }><i className="icon-angle-double-right"></i></div>
          : <div onClick={ this.togglePanels }><i className="icon-angle-double-left"></i></div> }
        </div>
        <div className="container">
          { panels.map(e => (
            <Panel key={e.id} className={e.className} tabs={e.tabs} isCollapsed={isCollapsed}>
              { e.children }
            </Panel> 
          )) }
        </div>
      </div>
    );
  }
}

PanelGroup.propTypes = {
  panels: PropTypes.array.isRequired
}

export default PanelGroup;