import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <br/>
        <MyComponent /* 디폴트 프롭스 사용 */ />
        <br/>
        <br/>
        <br/>
        <MyComponent name={1} text={2} />
      </div>
    );
  }
}

export default App;
