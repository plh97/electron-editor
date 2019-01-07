import React from 'react';
import Immutable, { fromJS } from 'immutable';
import {
  Editor, 
  EditorState, 
  RichUtils,
  convertToRaw,
  ContentState,
  NestedUtils,
  convertFromHTML
} from 'draft-js';
import { draftToMarkdown } from 'markdown-draft-js';
import TableUtils from 'draft-js-table';
import 'draft-js/dist/Draft.css';
import './styles/index.less';
// import createTablePlugin, { tableCreator, tableStyles } from 'draft-js-table-plugin';
// const TableUtils = require('../')
// import 'draft-js-table-plugin/lib/plugin.css';

const {Map, List} = Immutable;


// const blockRenderMap = NestedUtils.DefaultBlockRenderMap
//     .merge(TableUtils.DefaultBlockRenderMap);

const styleMap = {
  'delete': {
    textDecoration: 'line-through',
  },
  'bold': {
    fontWeight: 'bold'
  },
  'italic': {
    fontStyle: 'italic'
  },
  'underline':{
    textDecoration: 'underline',
  },
  'h1Title': {
    display: 'block',
    fontSize: '20px'
  }
};



class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div  className="true"  data-block="true"   >
        <table className="MyCustomBlock">
          <tbody>
            <tr>
              <td>213</td>
              <td>12312</td>
            </tr>
            <tr>
              <td>213</td>
              <td>12312</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}




const blockRenderMap = props => Immutable.Map({
  // 'MyCustomTable': {
  //   element: 'section',
  //   wrapper: <MyCustomTable />,
  // },
  'table-cell': {
    element: 'td',
    wrapper: <Table editor={props.editor} editorState={props.editorState}/>
  },
  'unstyled': {
    element: 'div'
  },
  'header-one': {
    element: 'h1'
  }
});



export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => {
      this.setState({
        editorState
      });
    }
    // 暴露接口给 Android
    window.editor = {
      inline: (style)=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
      },
      block: (style)=>{
        this.onChange(RichUtils.toggleBlockType(
          this.state.editorState, 
          style
        ));
      }
    } 
  }
  inlineStyle(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  }
  blockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState,blockType));
  }
  getMarkdownLang(){
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    var markdownString = draftToMarkdown(raw);
    console.log(raw,markdownString);
  }
  // createTable() {
  //   const { editorState } = this.state;
  //   TableUtils.insertTable(editorState, 2, 2)
  // }
  render() {
    return (
      <div>
        <button onClick={() => {this.getMarkdownLang()}}>导出</button>
        <button onClick={() => {this.blockType('table-cell')}}>插入表格</button>
        {/* <button onClick={() => {this.inlineStyle('bold') }}>加粗</button>
        <button onClick={() => {this.inlineStyle('italic') }}>斜体</button>
        <button onClick={() => {this.inlineStyle('underline') }}>下划线</button>
        <button onClick={() => {this.inlineStyle('delete') }}>删除线</button>
        <button onClick={() => {this.blockType('header-one')}}>大标题</button>
        <button onClick={() => {this.blockType('header-two')}}>小标题</button>
        <button onClick={() => {this.blockType('blockquote')}}>引用</button>
        <button onClick={() => {this.blockType('unordered-list-item')}}>无序列表</button> */}
        <Editor
          blockRenderMap={blockRenderMap(this.props)}             // 定制块状样式
          customStyleMap={styleMap}                   // 定制内联样式
          editorState={this.state.editorState}
          // handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}