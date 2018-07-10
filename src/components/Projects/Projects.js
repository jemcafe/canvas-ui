import React from 'react';
// import PropTypes from 'prop-types';

function Projects (props) {
  const {
    // tabs,
    tab,
    changeTab
  } = props;

  const tabs = [
    { id: 1, name: 'Untitled 1', children: 'CANVAS 1' },
    { id: 2, name: 'Untitled 2', children: 'CANVAS 2' },
    { id: 3, name: 'Untitled 3', children: 'CANVAS 3' },
  ];

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
      <nav>
        <ul className="tabs">{ tabList }</ul>
        <div><div><i className="icon-angle-double-right"></i></div></div>
      </nav> }
      <div className="container">
        { content }
      </div>
    </div>
  );
}

// Projects.propTypes = {
//   tabs: PropTypes.array.isRequired
// }

export default Projects;