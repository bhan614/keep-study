import { createStore, combineReducers } from './redux';
import counterReducer from './counterReducer'
import infoReducer from './infoReducer'
import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

let store = createStore(reducer);

const next = store.dispatch;

/*重写了store.dispatch*/
// store.dispatch = (action) => {
//   try {
//     console.log('this state', store.getState());
//     console.log('action', action);
//     next(action);
//     console.log('next state', store.getState());
//   } catch (err) {
//     console.error('错误报告: ', err)
//   }
// }
const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);

store.dispatch = exception(time(logger(next)));

store.dispatch({
  type: 'INCREMENT'
});
