import React from 'react';
import PropTypes from 'prop-types';

// Components
import Panel from './Panel/Panel';
import ToolMenu from '../../containers/ToolMenuCntr';

function PanelGroup (props) {
  const {
    isCollapsed,
    side,
    tools,
    panels,
    togglePanels,
    togglePanel,
    changeTab
  } = props;

  return (
    <div className="panel-group">
      <div className={side === 'L' ? 'left' : 'right'}>
        { !isCollapsed 
        ? <div onClick={ togglePanels }><i className={`icon-angle-double-${side === 'L' ? 'left' : 'right'}`}></i></div>
        : <div onClick={ togglePanels }><i className={`icon-angle-double-${side === 'L' ? 'right' : 'left'}`}></i></div> }
      </div>
      
      <div className="container">
        { panels.length ? panels.map((panel, i) => (
          <Panel 
            key={panel.id} 
            index={i}
            panel={panel}
            isCollapsed={isCollapsed}
            togglePanel={togglePanel}
            changeTab={changeTab} />
        )) : null }

        { tools && 
          <ToolMenu isCollapsed={isCollapsed} /> }
      </div>
    </div>
  );
}

PanelGroup.propTypes = {
  panels: PropTypes.array.isRequired
}

export default PanelGroup;