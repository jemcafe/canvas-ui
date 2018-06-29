import React, { Component } from 'react';

class Panel extends Component {
  constructor () {
    super();
    this.state = { tab: 0 }
  }

  selectTab (index) {
    this.setState({ tab: index });
  }

  render () {
    const { tabs, children } = this.props;

    const tabsList = tabs.map((e, i) => {
      const selected = this.state.tab === i ? 'selected': '';
      return <li key={i} className={selected} onClick={() => this.selectTab(i)}>{ e }</li>
    });

    return (
      <div className="panel">
        <nav>
          <ul>
            { tabsList ? tabsList : 'NO TABS' }
          </ul>
          <div><i className="icon-bars"></i></div>
        </nav>
        <main>
          { children ? children : 'NO CHILDREN' }
        </main>
      </div>
    );
  }
}

export default Panel;