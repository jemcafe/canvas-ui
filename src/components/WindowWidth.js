import React from 'react';

class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { 
      height: window.innerHeight, 
      width: window.innerWidth
    };
  }
  componentDidMount() {
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }
  
  render() {
    console.log(this.state.width);
    return (
      <h3>
        Window width: {this.state.width} and height: {this.state.height}
      </h3>
    );
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default WindowWidth;