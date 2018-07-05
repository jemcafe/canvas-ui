import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from '../components/PanelGroup/PanelGroup';

class PanelGroup extends Component {
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
        tooglePanels={this.togglePanels}
        changeTab={this.changeTab} />
    );
  }
}

PanelGroup.propTypes = {
  panels: PropTypes.array.isRequired
}

export default PanelGroup;