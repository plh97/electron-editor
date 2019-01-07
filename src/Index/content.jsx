import React from 'react';
import {Editor, EditorState} from 'draft-js';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});
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
              <Editor editorState={this.state.editorState} onChange={this.onChange} />
              {/* <Editor editorState={content.val} onChange={change} /> */}
              {/* <textarea value={content.val} onChange={change}></textarea> */}
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