const createStore = function(initState) {
  let state = initState;
  let listeners = [];

  //订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  //更改状态
  function changeState(newState) {
    state = newState;
    //通知订阅者
    for (var i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener()
    }
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    changeState,
    getState
  }
}

export default createStore
