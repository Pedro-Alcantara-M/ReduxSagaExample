
export function setUsers(users) {
  return{
    type: 'SET_USERS_STATE',
    payload: users,
  }
}

export function addUsers(users) {
  return{
    type: 'ADD_USERS_STATE',
    payload: users,
  }
}

export function removeUsers(users) {
  return{
    type: 'REMOVE_USERS_STATE',
    payload: users,
  }
}

export function updateUsers(users) {
  return{
    type: 'UPDATE_USERS_STATE',
    payload: users,
  }
}