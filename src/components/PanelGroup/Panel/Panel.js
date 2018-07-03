import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isObject } from '../../../helpers/dataTypeCheck';

class Panel extends Component {
  constructor () {
    super();
    this.state = { 
      tab: 0,
      showPanel: false
    }
  }

  togglePanel (tab) {
    this.setState(prev => (
      prev.tab === tab
      ? { showPanel: !prev.showPanel }
      : { tab: tab, showPanel: true }
    ));
  }

  render () {
    const { tab, showPanel } = this.state;
    const { className, tabs = [], children, isCollapsed } = this.props;

    const styles = {
      collapsed: isCollapsed ? {
        position: 'absolute',
        minWidth: `${200}px`,
        transform: `translate(-${202}px, 0)`
      } : null
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
      <li key={i} className={ classNames.tab(i) } onClick={() => this.setState({ tab: i })}>{ e }</li>
    ));

    const iconList = tabs.map((e, i) => (
      <li key={i} onClick={() => this.togglePanel(i)}><i className={ classNames.icon(e) }></i></li>
    ));

    const content = (
      (!tabs.length)          // No tabs
      ? ('NEED TABS') 
      : (!children)           // No children
      ? ('NO CHILDREN') 
      : (isObject(children))  // One child
      ? (tab === 0 ? children : 'NO CONTENT')
      : (tab < children.length ? children[tab] : 'NO CONTENT')  // More than one child
    );

    return (
      <div className={`panel${ classNames.panel }`}>
        { (showPanel || !isCollapsed) &&
        <div className="container" style={ styles.collapsed }>
          <nav>
            <ul>{ tabList }</ul>
            <div><div><i className="icon-bars"></i></div></div>
          </nav>
          <div>{ content }</div>
        </div> }

        { isCollapsed &&
        <div className="collapsed">
          <div></div>
          <ul>{ iconList }</ul>
        </div> }
      </div>
    );
  }
}

Panel.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default Panel;