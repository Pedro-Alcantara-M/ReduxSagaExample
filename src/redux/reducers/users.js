const initialState = {
  users: [],
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload }

    case 'ADD_USERS':
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

    case 'REMOVE_USERS':
      state.users = state.users.filter(({ id }) => id !== action.payload)
      return state

    case 'UPDATE_USERS':
      state.users.forEach((user) => {
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