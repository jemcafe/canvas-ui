import React from 'react';
import PropTypes from 'prop-types';

function TabGroup (props) {
  const { 
    index,
    tabGroup: { 
      className,  // optional
      tabs = [], 
      tab = 0, 
      isHidden = true
    },
    isCollapsed = false,
    togglePanel,
    changeTab
  } = props;

  const styles = {
    panel: !isCollapsed ? {
      height: '50%',  // Using percentage instead of flexbox to stretch the panels
    } : null,
    container: isCollapsed ? {
      position: 'absolute',
      minWidth: `${220}px`,
      transform: `translate(-${222}px, 0)`
    } : {
      height: '100%'
    }
  }

  const classNames = {
    panel: (
      className ? ` ${className}` : ''
    ),
    tab: (index) => (
      (tab === index) ? 'selected-tab' : 
      (index < tab)   ? 'left-tab' : 
      (index > tab)   ? 'right-tab' : ''
    ),
    icon: (tabName) => (
      (tabName === 'Color')     ? 'icon-color' :
      (tabName === 'Swatches')  ? 'icon-swatches' :
      (tabName === 'Layers')    ? 'icon-layers' :
      (tabName === 'History')   ? 'icon-history' :
      (tabName === 'Character') ? 'icon-character' :
      (tabName === 'Paragraph') ? 'icon-paragraph' : ''
    ),
    selectedIcon: (index) => (
      (!isHidden && (tab === index)) ? ' selected' : ''
    )
  }

  const tabList = tabs.map((e, i) => (
    <li key={i} className={ classNames.tab(i) } onClick={() => changeTab(index, i)}>{ e.name }</li>
  ));

  const menuOptions = tabs[tab].menu.map((e, i) => (
    <option key={i}>{ e }</option>
  ));

  const content = tabs[tab].content;

  const iconList = tabs.map((e, i) => (
    <li key={i} className={ classNames.selectedIcon(i) } onClick={() => changeTab(index, i)}>
      <i className={ classNames.icon(e.name) }></i>
    </li>
  ));

  return (
    <div className={`tab-group${ classNames.panel }`} style={ styles.panel }>
      { (!isHidden || !isCollapsed) &&
      <div className="container" style={ styles.container }>
        <nav>
          <ul className="tabs">{ tabList }</ul>
          <div>
            { isCollapsed && 
            <div className="double-angle-btn" onClick={() => togglePanel(index)}><i className="icon-angle-double-right"></i></div> }

            <div className="menu">
              <div><i className="icon-bars"></i></div>
              <select>
                { menuOptions }
                <optgroup label="Close">
                  <option>Close</option>
                  <option>Close Tab Group</option>
                </optgroup>
              </select>
            </div>
          </div>
        </nav>
        <div className="content">{ content }</div>
      </div> }

      { isCollapsed &&
      <div className="icon-tabs">
        <div></div>
        <ul>{ iconList }</ul>
      </div> }
    </div>
  );
}

TabGroup.propTypes = {
  index: PropTypes.number.isRequired,
  tabGroup: PropTypes.object.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired
}

export default TabGroup;