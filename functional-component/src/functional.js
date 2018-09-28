import React from 'react';

/**
class Hello extends Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
}
* 기존 class 선언식 컴포넌트
*/

const Hello = ({name}) => (
  <div>Hello {name}</div>
);
/**
 * 컴포넌트에서 라이프사이클, state등 불필요한 기능을 제거한 상태
 * 메모리 소모량은 일반 class형보다 적으므로 v16이후에는 더 빠름
 */

export default Hello;
