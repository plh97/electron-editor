import React from 'react';
import {connect} from 'react-redux';
import {
  switchNav,
  switchMain
} from '../../actions/root'
import '../../styles/reset.less'


class Layout extends React.Component {
  constructor(props){
    super(props);
    // this.test = props;
  }
  componentDidMount(){
    console.log('componentDidMount');
    document.querySelector("#layoutListen").addEventListener('click',(e)=>{
      const el = e.target;
      if(el.classList.contains("on")) return;   // 如果点击的是当前选项,则不必切换...
      let isDomFunc = (dom, id)=>{
        if(dom.dataset[id]){
          return dom;
        }else if(dom === document.body){
          return false;
        } else {
          return isDomFunc(dom.parentElement,id);
        }
      }
      const isNav = isDomFunc(el,'nav');
      const isMain = isDomFunc(el,'main');
      const {switchMain,switchNav} = this.props;
      if(isNav && isNav.dataset.nav) {
        switchNav(Number(isNav.dataset.nav));
      } else if(isMain && isMain.dataset.main) {
        switchMain(Number(isMain.dataset.main));
      }
    })
  }
  render(){
    return (
      <div className="cross-all" id="layoutListen">
        {this.props.children}
      </div>
    )
  }
}




function mapDispatchToProps(
  dispatch,
  ownProps
) {
  return {
    switchNav: (i) => {
      dispatch(switchNav(i))
    },
    switchMain: (i) => {
      dispatch(switchMain(i))
    },
  }
}

const mapStateToProps = function(state) {
  return {}
}

export default connect(
  mapStateToProps,     // 负责逻辑  也就是说 将 全局状态state 映射到UI组件的prop上面  而且它会订阅 Store
  mapDispatchToProps       // 用来建立 UI 组件的参数到store.dispatch方法的映射
)(Layout)


