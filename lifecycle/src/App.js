import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample'

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

class App extends Component {
  state = {
    number: 0,
    color: '#000000'
  };
  
  handleClick = () => {
    this.setState({
        color: getRandomColor()
    });
  };

  handlePlusClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color} number={this.state.number}/>
          <button onClick={this.handlePlusClick}>
            더하기
          </button>
        </div>
    );
  }
}

export default App;
