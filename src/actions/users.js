export function fetchUser(){
  return {
    type: 'FETCHING_USER_FU',
    payload: {
      name: 'will',
      age: 35,
    }
  }
}

export function setUserName(name){
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}

export function setUserAge(age){
  return {
    type: 'SET_USER_AGE',
    payload: age
  }
}



// case 'FETCHING_START':
// state = { ...state, fetching: true };
// break;
// case 'FETCH_USER_ERROR':
// state = { ...state, fetching: false,error: action.payload };
// break;
// case 'RECEIVE_USER':
// state = { 
//   ...state, 
//   fetching: false,
//   fetched: true,
//   users: action.payload
// };
// break;