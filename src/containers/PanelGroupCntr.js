import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from '../components/PanelGroup/PanelGroup';

class PanelGroupCntr extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      panels: this.props.panels || [],
      isCollapsed: false 
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
    return (
      <PanelGroup 
        panels={this.state.panels} 
        isCollapsed={this.state.isCollapsed}
        togglePanels={this.togglePanels}
        togglePanel={this.togglePanel}
        changeTab={this.changeTab} />
    );
  }
}

PanelGroupCntr.propTypes = {
  panels: PropTypes.array.isRequired
}

export default PanelGroupCntr;