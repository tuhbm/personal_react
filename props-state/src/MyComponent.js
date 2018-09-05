import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    state= {
        number: Math.round(Math.random() * 300) + 50
    };
    static defaultProps = {
        name: 'name props default',
        text: 'text props default',
        age: 6
    };

    static propTypes = {
        name: PropTypes.string,
        text: PropTypes.string,
        age: PropTypes.number.isRequired
    };

    render () {
        return (
            <div>
                <div>My Component 불러오기</div>
                <br/>
                <br/>
                <h2>Props 사용하기</h2>
                <div>{ this.props.name } 사용하기</div>
                <div>{ this.props.text } 추가</div>
                <div>{ this.props.age }살 입니다.</div>
                <div>숫자: { this.state.number }</div>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number-1
                    })
                }}>클릭</button>
                <button onMouseEnter={() => {
                    this.setState({
                        number: this.state.number-1
                    })
                }}>HOVER</button>
            </div>
        )
    }
}


export default MyComponent;