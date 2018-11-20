const createStore = function(reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function'){
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  /*如果有 rewriteCreateStoreFunc，那就采用新的 createStore */
  if(rewriteCreateStoreFunc){
     const newCreateStore =  rewriteCreateStoreFunc(createStore);
     return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  //订阅
  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  //更改状态
  function dispatch(action) {
    //按照计划修改state
    state = reducer(state, action);
    //通知订阅者
    for (var i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener()
    }
  }

  function getState() {
    return state
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer
    /*刷新一遍 state 的值，新来的 reducer 把自己的默认状态放到 state 树上去*/
    dispatch({ type: Symbol() })
  }

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer
  }
}

export default createStore
