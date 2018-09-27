import React, {Component} from 'react';

class LifeCycleSample extends Component {
  state = {
    number: null,
    color: null
  };
  
  myRef = null; // ref를 설정할 부분
  
  constructor(props) {
    super(props);
    /**
     * super를 선언하지 않으면 this가 초기화되지 않음.
     * 그러므로 constructor를 사용하려면 super() 가 필수.
     * 만약 this.props를 사용하고 싶다면 super(props)를 넣어야함.
     * 하지만 constructor가 아닌곳에서 this.props는 사용 가능.
     */
    console.log('constructor');
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    /**
     * props로 받아온 값을 state에 동기화시키는 용도로 사용
     * 컴포넌트는 마운트하거나 props를 변경할때 호출
     */
    if(nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;
  }
  
  componentDidMount() {
    /**
     * 컴포넌트를 만들고 첫 렌더링을 마친 후 실행
     * 자바스크립트 라이브러리 및 프레임워크의 함수를 호출하거나 이벤트 등록, 비동기작업시 사용
     */
    console.log('componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * props나 state 변경시 리렌더링을 시작할지를 지정하는 메서드
     * 반드시 true 또는 false를 반환해야함.
     * 현재 props나 state는 this.props와 this.state로 접근
     * 새로 설정될 props와 state는 nextProps와 nextState로 접근
     */
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  
  componentWillUnmount() {
    /**
     * componentDidMount단계에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면, 이타이밍에서 제거해야함.
     */
    console.log('componentWillUnmount');
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    /**
     * render메서드 호출 후 DOM의 변화를 반영하기 바로 직전 호출
     * componentDidUpdate 에서 세번째 인자로 받는 snapshot의 값으로 전달 됨.
     * 주로 업데이트 직전의 값을 참고할 일이 있을때 활용(ex:스크롤바 위치 유지시)
     */
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    /**
     * 리렌더링 완료 후 실행
     * 업데이트가 끝난 직후이므로 DOM관련 처리
     * prevProp, prevState로 업데이트 직전의 데이터에 접근가능.
     * getSnapshotBeforeUpdate에서 반환된 값을 snapshot으로 전달받을 수 있다.
     */
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.props.number}
        </h1>
        <p>color: {this.props.color}</p>
      </div>
    );
  }
}
export default LifeCycleSample;