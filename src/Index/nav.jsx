import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {create ,del,nav} = this.props;
    console.log(nav);
    
    if(nav && nav.children.length>0){
      return (
        <div className="index-nav">
          <button onClick={create}>添加</button>
          <button onClick={del}>删除</button>
          <div className="index-nav-item__container">
            {nav.children
              .map((e,i) => <div data-nav={i} key={i} 
                              className={'index-nav__item ' + (nav.on===i?'on':'')}>
                              <h4 className="index-nav__title">
                                {e.name}
                              </h4>
                              <p className="index-nav__detail">
                                <span className="index-nav__time">
                                  {e.time}
                                </span>
                                <span className="index-nav__content">
                                  {e.val}
                                </span>
                              </p>
                            </div>
              )}
          </div>
        </div>
      )
    }else{
      return (
        <div className="index-nav noData">
          <button onClick={create}>添加</button>
          <button onClick={del}>删除</button>
          <div className="index-nav-item__container">
            没有数据
          </div>
        </div>
      )
    }
  }
}




