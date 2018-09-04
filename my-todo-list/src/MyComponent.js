import React, { Component } from 'react';

class MyComponent extends Component {
    render () {
        return (
            <div>
                <div>My Component 불러오기</div>
                <div>{ this.props.name } 사용하기</div>
                <div>{ this.props.text } 추가</div>
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name: 'name',
    text: 'text'
}

export default MyComponent;