import { combineReducers, createStore } from "redux";

const INITIAL_STATE = {
  usersRedux: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  const { usersRedux } = state
  switch (type) {
    case 'USER_ADD':
      return {...state, usersRedux: [...usersRedux, payload]}
    case 'USER_REMOVE':
      return { ...state, usersRedux: usersRedux.filter(userRedux => userRedux !== payload) }
    default:
      return state
  }

}

const reducers = combineReducers({
  userReducer
})

const store = createStore(reducers)


const actions = {
  add: usersRedux => ({
    payload: usersRedux,
    type: 'USER_ADD'
  }),

  remove: usersRedux => ({
    payload: usersRedux,
    type: 'USER_REMOVE'
  })
}

export { actions, store}