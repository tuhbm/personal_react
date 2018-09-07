import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import EventPractice from './EventPractice';
import VaildationSample from './VaildationSample'
import ScrollBox from './ScrollBox'

class App extends Component {
  render() {
    return (
        <div>
            <EventPractice/>
            <VaildationSample/>
            <ScrollBox ref={(ref) => this.scrollBox = ref}/>
            <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        </div>
    );
  }
}

export default App;
