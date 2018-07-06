import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel/Panel';

function PanelGroup (props) {
  const {
    panels,
    isCollapsed,
    togglePanels,
    togglePanel,
    changeTab
  } = props;

  return (
    <div className="panel-group">
      <div>
        { !isCollapsed 
        ? <div onClick={ togglePanels }><i className="icon-angle-double-right"></i></div>
        : <div onClick={ togglePanels }><i className="icon-angle-double-left"></i></div> }
      </div>
      <div className="container">
        { panels.map((e, i) => (
          <Panel 
            key={e.id} 
            index={i}
            className={e.className} 
            tabs={e.tabs} 
            tab={e.tab}
            isHidden={e.isHidden}
            isCollapsed={isCollapsed}
            togglePanel={togglePanel}
            changeTab={changeTab}>
            { e.children }
          </Panel> 
        )) }
      </div>
    </div>
  );
}

PanelGroup.propTypes = {
  panels: PropTypes.array.isRequired
}

export default PanelGroup;