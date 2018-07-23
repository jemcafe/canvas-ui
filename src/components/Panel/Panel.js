import React from 'react';
import PropTypes from 'prop-types';

// Components
import TabGroup from './TabGroup/TabGroup';
import ToolMenu from '../../containers/ToolMenuCntr';

function Panel (props) {
  const {
    isCollapsed,
    side,
    tools,
    tabGroups: tg,
    togglePanels,
    togglePanel,
    changeTab
  } = props;

  const tabGroups = tg.length > 0 
  ? tg.map((tabGroup, i) => (
    <TabGroup 
      key={tabGroup.id} 
      index={i}
      tabGroup={tabGroup}
      isCollapsed={isCollapsed}
      togglePanel={togglePanel}
      changeTab={changeTab} />
  )) : null;
  
  return (
    <div className="panel">
      <div className={side === 'L' ? 'left' : 'right'}>
        { !isCollapsed 
        ? <div onClick={ togglePanels }><i className={`icon-angle-double-${side === 'L' ? 'left' : 'right'}`}></i></div>
        : <div onClick={ togglePanels }><i className={`icon-angle-double-${side === 'L' ? 'right' : 'left'}`}></i></div> }
      </div>
      
      <div className="container">
        { !isCollapsed && tabGroups }
        { isCollapsed && tabGroups }
        { tools && <ToolMenu isCollapsed={isCollapsed} /> }
      </div>
    </div>
  );
}

Panel.propTypes = {
  tabGroups: PropTypes.array.isRequired
}

export default Panel;