/*InfoReducer，一个子reducer*/
/*注意：countReducer 接收的 state 是 state.info*/
let initState = {
  name: '前端九部',
  description: '我们都是前端爱好者！',
}

export default function InfoReducer(state, action) {
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}
