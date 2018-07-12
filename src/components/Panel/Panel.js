import React from 'react';
import PropTypes from 'prop-types';

// Components
import TabGroup from './TabGroup/TabGroup';
import ToolMenu from '../../containers/ToolMenuCntr';

function PanelGroup (props) {
  const {
    isCollapsed,
    side,
    tools,
    tabGroups,
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
        { tabGroups.length ? tabGroups.map((tabGroup, i) => (
          <TabGroup 
            key={tabGroup.id} 
            index={i}
            tabGroup={tabGroup}
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
  tabGroups: PropTypes.array.isRequired
}

export default PanelGroup;