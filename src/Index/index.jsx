import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Main from './main';
import Nav from './nav';
import Content from './Content';
import { 
  createMain, deleteMain,
  createNav, deleteNav,
  changeContent
} from '../actions/root';
import './index.less';


// 容器组件
const Index = ({
  main,createMain,deleteMain,
  nav,createNav,deleteNav,
  content,changeContent
}) =>
  <Layout>
    <div className="index__layout cross-all">
      <Main
        main={main}
        create={createMain}
        del={deleteMain}
      />
      <Nav 
        nav={nav}
        create={createNav}
        del={deleteNav}
      />
      <Content content={content} change={changeContent}/>
    </div>
  </Layout>

function mapDispatchToProps(
  dispatch,
  ownProps
) {
  return {
    createMain: () => {
      dispatch(createMain())
    },
    deleteMain: () => {
      dispatch(deleteMain())
    },
    createNav: () => {
      dispatch(createNav())
    },
    deleteNav: () => {
      dispatch(deleteNav())
    },
    changeContent: (c) => {
      const val = c.target.value;
      dispatch(changeContent(val))
    }
  }
}

const mapStateToProps = function(state) {
  const { main } = state.root;
  const nav = main.children[main.on];
  return {
    main: main ? main: null,
    nav: nav ? nav: null,
    content: nav ? nav.children[nav.on] : null
  }
}

const VisibleTodoList = connect(
  mapStateToProps,          // 负责逻辑  也就是说 将 全局状态state 映射到UI组件的prop上面  而且它会订阅 Store
  mapDispatchToProps        // 用来建立 UI 组件的参数到store.dispatch方法的映射
)(Index);

export default VisibleTodoList;
