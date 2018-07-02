import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
  constructor () {
    super();
    this.state = { tab: 0 }
  }

  tabList () {
    const { tab: t } = this.state;
    const { tabs = [] } = this.props;

    if ( tabs.length ) {
      return tabs.map((e, i) => {
        const className = t === i ? 'selected-tab' : i < t ? 'left-tab' : i > t ? 'right-tab' : '';
        return <li key={i} className={className} onClick={() => this.setState({ tab: i })}>{ e }</li>;
      });
    } else {
      return <div className="left-tab">NO TABS</div>
    }
  }

  displayContent () {
    const { state, props, isObject } = this;
    const { tab: t } = state;
    const { tabs = [], children: c } = props;

    if ( !tabs.length ) return 'NEED TABS';                 // No Tabs;
    if ( !c )           return 'NO CHILDREN';               // No children
    if ( isObject(c) )  return t === 0 ? c : 'NO CONTENT';  // One child
    return t < c.length ? c[t] : 'NO CONTENT';              // More than one child
  }

  isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  render () {
    const { className: cn } = this.props;
    const className = cn ? ` ${cn}` : '';

    return (
      <Fragment>
        <div className={`panel${className}`}>
          <nav>
            <ul>{ this.tabList() }</ul>
            <div>
              <div><i className="icon-bars"></i></div>
            </div>
          </nav>
          <div className="container">
            { this.displayContent() }
          </div>
        </div>

        <div className={`panel-collapsed${className}`}>
          <ul>
            <li><i className="icon-swatches"></i></li>
            <li><i className="icon-color"></i></li>
            <li><i className="icon-layers"></i></li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

Panel.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default Panel;