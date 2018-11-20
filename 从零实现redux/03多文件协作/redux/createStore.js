const createStore = function(reducer, initState) {
  let state = initState;
  let listeners = [];

  //订阅
  function subscribe(listener) {
    listeners.push(listener)
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

  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}

export default createStore
