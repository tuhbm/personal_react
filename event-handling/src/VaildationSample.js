import React, {Component} from 'react';
import './VaildationSample.css';

class VaildationSample extends Component {
    state = {
        password: '',
        clicked: false,
        vailDated: false
    };
    
    handleChange = (e) => { // 메서드 바인딩은 새메서드를 만들 때 마다 constructor를 수정해줘야하기 때문에 arrow function을 사용하여 넘겨줌
        this.setState({
            password: e.target.value
        });
    };
    
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            vailDated: this.state.password === '0000'
        });
        this.input.focus();
    };
    
    render() {
        return (
            <div>
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.vailDated ? 'success' : 'failure') : ''}
                />
                <input
                    type="text"
                    placeholder="포커스가 일로 넘어온다."
                    ref={(ref) => {this.input = ref}}
                />
                <br/>
                <button onClick={this.handleButtonClick}>버튼확인</button>
            </div>
        );
    }
}

VaildationSample.propTypes = {};

export default VaildationSample;
