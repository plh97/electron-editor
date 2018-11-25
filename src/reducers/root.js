export default (state={
  main: {   
    children: [  // main层 数组容器
      { 
        children:[
          {    // nav 层容器
            name: '文本标1111',
            time: '2018-11-22',
            val: '...'
          },
          {    // nav 层容器
            name: '文本标2222',
            time: '2018-11-22',
            val: '...'
          },
          {    // nav 层容器
            name: '文本标3333',
            time: '2018-11-22',
            val: '...'
          },
        ],
        on:0,   // 当前活动的nav
        name: 'All iCloud',
      },{ 
        children:[
          {    // nav 层容器
            name: '文本标1111',
            time: '2018-11-22',
            val: '22222'
          },
          {    // nav 层容器
            name: '文本标2222',
            time: '2018-11-22',
            val: '22222'
          },
          {    // nav 层容器
            name: '文本标3333',
            time: '2018-11-22',
            val: '22222'
          },
        ],
        on:0,   // 当前活动的nav
        name: 'Notes',
      },{ 
        children:[
          {    // nav 层容器
            name: '文本标1111',
            time: '2018-11-22',
            val: '22222'
          },
          {    // nav 层容器
            name: '文本标2222',
            time: '2018-11-22',
            val: '22222'
          },
          {    // nav 层容器
            name: '文本标3333',
            time: '2018-11-22',
            val: '22222'
          },
        ],
        on:0,   // 当前活动的nav
        name: 'New Folder',
      },
    ],
    on: 0,  // 当前活动的main
  },
}, action) => {
  const {main} = state;
  const nav = main
  switch (action.type) {
    case 'CREATE_MAIN':
      state = { ...state, main: Object.assign({},main,{
        children: [...main.children, {on: 0,name: '名字???',children:[] }]
      })};
      break;
    case 'DELETE_MAIN':   // 只是删除当前选中项
      state = { ...state, main: Object.assign({},main,{
        children: main.children.filter((m,i) => i !== main.on)
      })};
      break;
    case 'SWITCH_MAIN':   // 切换当前选中项
      state = {...state, main:Object.assign({},state.main,{on:action.payload})};
      break;
    // 在nav层末尾创建元素
    case 'CREATE_NAV':
      state = { ...state, main: Object.assign({},main,{
        children: main.children.map((nav,i)=>main.on==i ? Object.assign({},nav,{
          children: [...nav.children,{
            name: '我就是新文本...',
            time: '现在',
            val: '新文本可修改'
          }]
        }) : nav )
      })};
      break;
    // 删除nav层的当前元素
    case 'DELETE_NAV':
      state = { ...state, main: Object.assign({},main,{
        children: main.children.map((nav,i)=>main.on==i ? Object.assign({},nav,{
          children: nav.children.filter((c,i)=>i!==nav.on)
        }) : nav )
      })};
      break;
    // 切换Nav层选中层
    case 'SWITCH_NAV':   
      state.main.children[state.main.on].on = action.payload;
      state = { ...state};
      break;
    // 创建 content文章内容 层
    case 'CHANGE_CONTENT':
      const curNav = state.main.children[state.main.on];
      state.main.children[state.main.on].children[state.main.children[state.main.on].on].val = action.payload;
      state.main.children[state.main.on].on = state.main.children[state.main.on].on;
      state = { ...state};
      break;
  }
  return state; 
};
