import React from 'react';
import PropTypes from 'prop-types';
import { isObject } from '../../../helpers/dataTypeCheck';

function Panel (props) {
  const { 
    index,
    className, // optional
    tabs = [], 
    tab = 0, 
    children, 
    isHidden = true, 
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
    )
  }

  const tabList = tabs.map((e, i) => (
    <li key={i} className={ classNames.tab(i) } onClick={() => changeTab(index, i)}>{ e }</li>
  ));

  const iconList = tabs.map((e, i) => (
    <li key={i} onClick={() => changeTab(index, i)}><i className={ classNames.icon(e) }></i></li>
  ));

  // Children prop
  const content = (
    (!tabs.length)                                            // No tabs
    ? ('NEED TABS') 
    : (!children)                                             // No children
    ? ('NO CHILDREN') 
    : (isObject(children))                                    // One child
    ? (tab === 0 ? children : 'NO CONTENT')
    : (tab < children.length ? children[tab] : 'NO CONTENT')  // More than one child
  );

  return (
    <div className={`panel${ classNames.panel }`} style={ styles.panel }>
      { (!isHidden || !isCollapsed) &&
      <div className="container" style={ styles.container }>
        <nav>
          <ul className="tabs">{ tabList }</ul>
          <div>
            { isCollapsed && <div onClick={() => togglePanel(index)}><i className="icon-angle-double-right"></i></div> }
            <div><i className="icon-bars"></i></div>
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

Panel.propTypes = {
  index: PropTypes.number.isRequired,
  tabs: PropTypes.array.isRequired,
  tab: PropTypes.number.isRequired,
  isHidden: PropTypes.bool.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  changeTab: PropTypes.func.isRequired,
}

export default Panel;