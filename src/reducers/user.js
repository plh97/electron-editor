// 先不用,留给做用户登录的

export default (state={
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}, action) => {
  switch (action.type){
    case 'FETCHING_START':
      state = { ...state, fetching: true };
      break;
    case 'FETCH_USER_ERROR':
      state = { ...state, fetching: false,error: action.payload };
      break;
    case 'RECEIVE_USER':
      state = { 
        ...state, 
        fetching: false,
        fetched: true,
        users: action.payload
      };
      break;
  }
  return state; 
};