import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel/Panel';

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
      <div className="panel-group">
        <div>
          { !this.state.isCollapsed 
          ? <div onClick={ this.togglePanels }><i className="icon-angle-double-right"></i></div>
          : <div onClick={ this.togglePanels }><i className="icon-angle-double-left"></i></div> }
        </div>
        <div className="container">
          { this.state.panels.map((e, i) => (
            <Panel 
              key={e.id} 
              index={i}
              className={e.className} 
              tabs={e.tabs} 
              tab={e.tab}
              isHidden={e.isHidden}
              isCollapsed={this.state.isCollapsed}
              changeTab={this.changeTab}>
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