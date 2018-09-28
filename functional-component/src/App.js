import React, { Component } from 'react';
import Hello from './functional';

class App extends Component {
  render() {
    return (
        <Hello name={`헬로`}/>
    );
  }
}

export default App;
