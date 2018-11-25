import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  render () {
    const {content,change} = this.props;
    console.log('rerender');
    if(content){
      return (
        <div className="index-content__layout">
          <div className="index-content__container">
            <h3 className="index-content__title">
              {content.name}
            </h3>
            <h6>{content.time}</h6>
            <div className="index-content__content">
              {/* {content.val} */}
              <textarea value={content.val} onChange={change}></textarea>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="index-content__layout noData">
          <div className="index-content__container">
            该本文找不到
          </div>
        </div>
      )
    }
  }
}