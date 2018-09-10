import React, {Component} from 'react';

class IterationSample extends Component {
  state = {
    names : ['눈사람','얼음','눈','바람'],
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name)
    });
  };

  handleRemove = (index) => {
    const { names } = this.state;
    this.setState({
      names: [
        ...names.slice(0, index),
        ...names.slice(index + 1, names.length)
      ]
    });
  }

  handleKeypress = (e) => {
    if(e.key === 'Enter') {
      this.handleInsert();
      this.state.name = '';
    }
  };

  render() {
    const nameList = this.state.names.map((name,index) =>
      <li
          key={index}
          onDoubleClick={() => this.handleRemove(index)}>
      {name}
      </li>
    );

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          onKeyPress={this.handleKeypress}
        />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    );
  }
}
/*
map 함수는 기존의 객체를 건드리지 않고 새로운 객체를 만들어준다.
예제)
const numbers = [1,2,3,4,5];
const result = numbers.map(num => num * num);
console.log(numbers)  //[1,2,3,4,5]
console.log(result) //[1,4,9,16,25]
**/
export default IterationSample;
