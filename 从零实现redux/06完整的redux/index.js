import { createStore, combineReducers, applyMiddleware } from './redux';
import counterReducer from './counterReducer'
import infoReducer from './infoReducer'
import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

/*接收旧的 createStore，返回新的 createStore*/
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

/*返回了一个 dispatch 被重写过的 store*/
const store = createStore(reducer, rewriteCreateStoreFunc);

const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});
/*退订*/
unsubscribe();

// const reducer = combineReducers({
//   counter: counterReducer
// });
// const store = createStore(reducer);
//
// /*生成新的reducer*/
// const nextReducer = combineReducers({
//   counter: counterReducer,
//   info: infoReducer
// });
// /*replaceReducer*/
// store.replaceReducer(nextReducer);
