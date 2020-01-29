import React, { Component } from 'react';

class ButtonCounter extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}



export default ButtonCounter