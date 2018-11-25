// store 存储对象,

import {applyMiddleware, createStore} from 'redux';

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

import reducer from '../reducers';

const logger = createLogger();



export default createStore(
  reducer,
  applyMiddleware(
    promise(),
    thunk,
    logger
  )
);
