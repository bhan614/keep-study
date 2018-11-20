# bindAcitonCreators

bindActionCreators是在 react-redux 的 connect 实现中用到。

他是做什么的？他通过闭包，把 dispatch 和 actionCreator 隐藏起来，让其他地方感知不到 redux 的存在。
