import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../components/Panel/Panel';

class PanelCntr extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      tabGroups: this.props.tabGroups || [],
      isCollapsed: this.props.isCollapsed || false
    }
  }

  togglePanels = () => {
    this.setState(prev => ({ 
      tabGroups: prev.tabGroups.map((e, i) => {
        e.isHidden = true;
        return e;
      }), 
      isCollapsed: !prev.isCollapsed 
    }));
  }

  togglePanel = (panelIndex) => {
    this.setState(prev => ({
      tabGroups: prev.tabGroups.map((e, i) => {
        if (panelIndex === i) e.isHidden = true;
        return e;
      })
    }));
  }

  changeTab = (panelIndex, tabIndex) => {
    this.setState(prev => ({ 
      tabGroups: prev.tabGroups.map((e, i) => {

        if ( i === panelIndex ) {
          if ( e.tab === tabIndex ) {
            e.isHidden = !e.isHidden;
          } else {
            e.tab = tabIndex;
            e.isHidden = false;
          }
        } else {
          e.isHidden = true;
        }
        return e;

      })
    }));
  }

  render () {
    const { side = 'R', tools = false } = this.props;

    return (
      <Panel
        isCollapsed={this.state.isCollapsed}
        side={side}
        tools={tools} 
        tabGroups={this.state.tabGroups} 
        togglePanels={this.togglePanels}
        togglePanel={this.togglePanel}
        changeTab={this.changeTab} />
    );
  }
}

PanelCntr.propTypes = {
  isCollapsed: PropTypes.bool,
  side: PropTypes.string,
  tabGroups: PropTypes.array,
  tools: PropTypes.bool
}

export default PanelCntr;