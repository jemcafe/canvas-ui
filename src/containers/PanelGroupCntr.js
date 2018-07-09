import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from '../components/PanelGroup/PanelGroup';

class PanelGroupCntr extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      panels: this.props.panels || [],
      isCollapsed: this.props.isCollapsed || false 
    }
  }

  togglePanels = () => {
    this.setState(prev => ({ 
      panels: prev.panels.map((e, i) => {
        e.isHidden = true;
        return e;
      }), 
      isCollapsed: !prev.isCollapsed 
    }));
  }

  togglePanel = (panelIndex) => {
    this.setState(prev => ({
      panels: prev.panels.map((e, i) => {
        if (panelIndex === i) e.isHidden = true;
        return e;
      })
    }));
  }

  changeTab = (panelIndex, tabIndex) => {
    this.setState(prev => ({ 
      panels: prev.panels.map((e, i) => {

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
      <PanelGroup
        isCollapsed={this.state.isCollapsed}
        side={side}
        tools={tools} 
        panels={this.state.panels} 
        togglePanels={this.togglePanels}
        togglePanel={this.togglePanel}
        changeTab={this.changeTab} />
    );
  }
}

PanelGroupCntr.propTypes = {
  panels: PropTypes.array,
  side: PropTypes.string,
  tools: PropTypes.bool
}

export default PanelGroupCntr;