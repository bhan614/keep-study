import { createStore, combineReducers } from './redux';
import counterReducer from './counterReducer'
import infoReducer from './infoReducer'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

let store = createStore(reducer);

console.dir(store.getState());

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter, state.info);
});

/*自增*/
store.dispatch({
  type: 'INCREMENT'
});

/*修改 name*/
store.dispatch({
  type: 'SET_NAME',
  name: '前端九部2号'
});
