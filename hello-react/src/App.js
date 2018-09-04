import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const text = '당신은 어썸한가요ㅋㅋㅋ?';
    const condition = true;
    const condition2 = false;
    const style = {
      backgroundColor: 'pink',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }
    return (
      <div className="my-div">
        <h1 className="helloReact">리액트 안녕!</h1>
        <h2>{text}</h2>
        <form>
          <fieldset>필드셋</fieldset>
          <input type="text" placeholder="아이디" /><br/>
          <input type="password" placeholder="비밀번호" /><br/>
        </form>
        {/* 주석은 요로코롬 */}
        //주석을 이렇게 달면 걍 노출된다.
        <br/>
        /* 이것도 그냥 노출된다......... */
        <div /* 이건 허용된다....*/>주석용 돔입니다.</div>
        {
          condition ? '참' : '거짓'
        }
        <br/>
        {
          condition && '참'
        }
        <br/>
        {
          condition2 || '거짓'
        }
        <div style={style}></div>
      </div>
    );
  }
}

export default App;
