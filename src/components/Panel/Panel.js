import React, { Component } from 'react';

class Panel extends Component {
  constructor () {
    super();
    this.state = { tab: 0 }
  }

  render () {
    const { tab: t } = this.state;
    const { tabs = [], children = [] } = this.props;
    console.log('children', children);

    const tabsList = tabs.map((e, i) => {
      const className = t === i ? 'selected-tab' : i < t ? 'left-tab' : i > t ? 'right-tab' : '';
      return <li key={i} className={className} onClick={() => this.setState({ tab: i })}>{ e }</li>;
    });

    const content = tabs.length === 1 ? children : tabs.length ? children.map((e, i) => t === i && e) : 'NEED TABS';

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
          { children.length ? content : 'NO CHILDREN' }
        </main>
      </div>
    );
  }
}

export default Panel;