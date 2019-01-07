import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

import MyEditor from './MyInput';

class App extends React.Component {
  render() {
    return (
      <div className="editor">
        <MyEditor/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);