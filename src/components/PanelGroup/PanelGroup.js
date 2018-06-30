import React, { Component } from 'react';

class PanelGroup extends Component {
  constructor () {
    super();
    this.state = { isCollapsed: false }
  }

  toggleCollapse = () => {
    this.setState(prev => ({ isCollapsed: !prev.isCollapsed }));
  }

  render () {
    const { isCollapsed } =this.state;
    const { children } = this.props;

    // console.log('children', children );

    return (
      <div className="panel-group">
        <div>
          { !isCollapsed 
          ? <div onClick={ this.toggleCollapse }><i className="icon-angle-double-right"></i></div>
          : <div onClick={ this.toggleCollapse }><i className="icon-angle-double-left"></i></div> }
        </div>
        <div className="container">
          { !isCollapsed && children }
        </div>
      </div>
    );
  }
}

export default PanelGroup;