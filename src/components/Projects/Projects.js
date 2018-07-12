import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Projects extends Component {
  render () {
    const {
      tabs,
      tab,
      changeTab
    } = this.props;

    const classNames = {
      tab: (index) => (
        (tab === index) ? 'selected-tab' : 
        (index < tab)   ? 'left-tab' : 
        (index > tab)   ? 'right-tab' : ''
      )
    };

    const tabList = tabs.map((e, i) => (
      <li key={e.id} className={ classNames.tab(i) } onClick={() => changeTab(i)}><div><i className="icon-times"></i></div>{ e.name }</li>
    ));

    const content = tabs.length ? tabs[tab].children : 'NO CONTENT';

    return (
      <div className="projects">
        { tabs.length > 0 && 
        <nav ref="nav">
          <ul ref="tabs" className="tabs">{ tabList }</ul>
          <div><div className="double-angle-btn"><i className="icon-angle-double-right"></i></div></div>
        </nav> }
        <div className="container">
          { content }
        </div>
      </div>
    );
  }
}

// Projects.propTypes = {
//   tabs: PropTypes.array.isRequired
// }

export default Projects;