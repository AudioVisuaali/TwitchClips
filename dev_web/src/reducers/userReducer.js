export default function user(state={
  user: {
    id: null,
    username: null,
    loggedIn: false,
  },
  fetching: false,
  fetched: false,
  error: null,
  errors: {
    error: null,
    loginError: null,
    registerError: null
  }
}, action) {

  switch (action.type) {
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false, errors: action.payload }
    }
    case "FETCH_USER_FULLFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
    case "REGISTER_ERROR_UPDATE": {
      return {
        ...state,
        errors: {
          registerError: action.payload
        }
      }
    }

    case "USER_LOGOUT": {
      return {...state, fetching: true}
    }
    case "USER_LOGOUT_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "USER_LOGOUT_FULLFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: false,
        user: {
          id: 234234234,
          loggedIn: false,
          username: ""
        }
      }
    }
    default: {
      return state;
    }
  }
}
