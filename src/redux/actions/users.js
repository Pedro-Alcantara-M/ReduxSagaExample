
export function getUsers(users) {
  return{
    type: 'SET_USERS',
    payload: users,
  }
}

export function addUsers(users) {
  return{
    type: 'ADD_USERS',
    payload: users,
  }
}

export function removeUsers(users) {
  return{
    type: 'REMOVE_USERS',
    payload: users,
  }
}

export function updateUsers(users) {
  return{
    type: 'UPDATE_USERS',
    payload: users,
  }
}