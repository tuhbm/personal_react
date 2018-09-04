import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'name props default',
        text: 'text props default'
    }

    static propTypes = {
        name: PropTypes.string,
        text: PropTypes.string,
        age: PropTypes.number.isRequired
    }

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
            </div>
        )
    }
}


export default MyComponent;