// 主要用于引入我们所有的model，并且经过redux的API之后，导出一棵完整的数据状态树

import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// 引入写好的model
import globalModel from './globalModel';

// 调用RcReduxModel 实例化一下得到最后的reduxModel
const reduxModel = new RcReduxModel([globalModel]);

// 无侵入式的使用Redux， 即使写最原始的reducer 也一样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger))