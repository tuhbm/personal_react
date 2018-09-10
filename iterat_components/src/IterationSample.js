import React, {Component} from 'react';

class IterationSample extends Component {
  render() {
    return (
      <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
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
