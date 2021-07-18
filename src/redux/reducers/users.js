const initialState = {
  users: [],
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS_STATE':
      return { ...state, users: action.payload }

    case 'ADD_USERS_STATE':
      return {
        ...state, users: [...state.users,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          age: action.payload.age,
        }
        ]
      }

    case 'REMOVE_USERS_STATE':
      state.users = state.users.filter(({ id }) => id !== action.payload)
      return state

    case 'UPDATE_USERS_STATE':
      state.users.forEach((user) => {
        // eslint-disable-next-line eqeqeq
        if (user.id == action.payload.id) {
          user.id = action.payload.id;
          user.name = action.payload.name;
          user.email = action.payload.email;
          user.age = action.payload.age;
        }
      })
      return {
        users: [...state.users]
      }

    default:
      return state
  }
}