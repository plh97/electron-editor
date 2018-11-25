export function createMain(){
  return {
    type: 'CREATE_MAIN',
    payload: null
  }
}

export function deleteMain(){
  return {
    type: 'DELETE_MAIN',
    payload: null
  }
}


export function switchMain(index){
  return {
    type: 'SWITCH_MAIN',
    payload: index
  }
}


export function createNav(){
  return {
    type: 'CREATE_NAV',
    payload: null
  }
}

export function deleteNav(){
  return {
    type: 'DELETE_NAV',
    payload: null
  }
}


export function switchNav(index){
  return {
    type: 'SWITCH_NAV',
    payload: index
  }
}


export function createContent(){
  return {
    type: 'CREATE_CONTENT',
    payload: null
  }
}

export function deleteContent(){
  return {
    type: 'DELETE_CONTENT',
    payload: null
  }
}


export function changeContent(c){
  return {
    type: 'CHANGE_CONTENT',
    payload: c
  }
}

