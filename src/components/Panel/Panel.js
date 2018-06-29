import React, { Component } from 'react';

class Panel extends Component {
  constructor () {
    super();
    this.state = { tab: 0 }
  }

  displayContent () {
    const { tab: t } = this.state;
    const { tabs = [], children: c } = this.props;

    if ( !tabs.length ) return 'NEED TABS';                     // No Tabs;
    if ( !c ) return 'NO CHILDREN';                             // No children
    if ( this.isObject(c) ) return t === 0 ? c : 'NO CONTENT';  // One child
    return t < c.length ? c[t] : 'NO CONTENT';                  // More than one child
  }

  isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  render () {
    const { tab: t } = this.state;
    const { tabs = [], children = [] } = this.props;

    const tabsList = tabs.map((e, i) => {
      const className = t === i ? 'selected-tab' : i < t ? 'left-tab' : i > t ? 'right-tab' : '';
      return <li key={i} className={className} onClick={() => this.setState({ tab: i })}>{ e }</li>;
    });

    return (
      <div className="panel">
        <nav>
          <ul>
            { tabs.length ? tabsList : <div className="left-tab">NO TABS</div> }
          </ul>
          <div>
            <div><i className="icon-bars"></i></div>
          </div>
        </nav>
        <main>
          { this.displayContent() }
        </main>
      </div>
    );
  }
}

export default Panel;