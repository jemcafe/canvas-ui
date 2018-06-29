import React, { Component } from 'react';

class PanelGroup extends Component {
  constructor () {
    super();
    this.state = { }
  }

  toogleCollapse () {
  
  }

  render () {
    const { tab: t } = this.state;
    const { tabs = [], children = [] } = this.props;

    const tabsList = tabs.map((e, i) => {
      const className = t === i ? 'selected-tab' : i < t ? 'left-tab' : i > t ? 'right-tab' : '';
      return <li key={i} className={className} onClick={() => this.setState({ tab: i })}>{ e }</li>;
    });

    return (
      <div className="panel-group">
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

export default PanelGroup;