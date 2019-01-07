import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {create ,del , main} = this.props;
    if(main){
      return (
        <div className="index-main">
          <div className="index-main__container">
            {(main.children
              .map((e,i) => 
                <div data-main={i} 
                  key={i} className={'index-main__item ' + (main.on===i?'on':'')}
                >
                  {e.name}
                </div>
              )
            )}
          </div>
          <button onClick={create}>添加</button>
          {/* <button onClick={del}>删除</button> */}
        </div>
      )
    }else{
      return (
        <div className="index-main--noData">没有数据</div>
      )
    }
  }
}




