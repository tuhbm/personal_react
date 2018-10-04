import React, { Component } from 'react';
import Button from './components/Button';


// const cx = classNames.bind(styles);

class App extends Component {
  render() {
    // const isBlue = true;
    return (
      <div>
          <Button className={'button'}>버튼</Button>
          {/*<div className={cx('box', {blue: isBlue})}>*/}
              {/*<div class="box-inner">*/}
                  {/*<div className={cx('box-inside')}>*/}
                  {/*</div>*/}
              {/*</div>*/}
          {/*</div>*/}
          {/*<div className={cx(['foo', 'green'])}>*/}
          {/*</div>*/}
          {/*<div className={cx({poo: true}, {red: true})}>*/}
          {/*</div>*/}
          {/*<div className={cx({'moo': true}, {'pink': false})}>*/}
          {/*</div>*/}
          {/*<div className={cx({'boo': true, 'orange': true})}>*/}
          {/*</div>*/}
          {/*<div className={cx(null, 0, undefined, false, 'eoo', '', {'number': null})}>*/}
          {/*</div>*/}
      </div>
      
    );
  }
}

export default App;
