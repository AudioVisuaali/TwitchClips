import axios from "axios";

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function fetchUserStart() {return {type: "FETCH_USER", payload: {}}}

export function fetchUser() {
  return function(dispatch) {
    const cookieone = getCookie("user")
    const cookietwo = getCookie("session")

    axios.get(`https://api.audiovisuaali.net/api/user/check_session?user=${cookieone}&session=${cookietwo}`)
      .then((response) => {
        if (response.data.session) {
          dispatch({type: "FETCH_USER_FULLFILLED", payload: {id: response.data.user.id, username: response.data.user.username, loggedIn: true}})
        } else {
          dispatch({type: "FETCH_USER_REJECTED", payload: "not logged in"})
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

export function logoutUser() {
  return function(dispatch) {
    const cookieone = getCookie("user")
    const cookietwo = getCookie("session")
    axios.get(`https://api.audiovisuaali.net/api/user/logout_one?user=${cookieone}&session=${cookietwo}`)
      .then((response) => {
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch({type: "FETCH_USER_FULLFILLED", payload: {id: null, username: null, loggedIn: false}})
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

export function logInUser(username, password) {
  return function(dispatch) {
    axios.get(`https://api.audiovisuaali.net/api/user/login?username=${username}&password=${password}`)
      .then((response) => {
        console.log(username,password, response)
        if (response.data.logged) {
          document.cookie = `user=${response.data.cookies.user}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
          document.cookie = `session=${response.data.cookies.session}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
          dispatch({type: "FETCH_USER_FULLFILLED", payload: {id: response.data.user.id, username: response.data.user.username, loggedIn: true}})
        } else {
          dispatch({type: "FETCH_USER_REJECTED", payload: { loginError: response.data.msg } })
        }
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

export function createUser(username, password) {
  return function(dispatch) {
    axios.get(`https://api.audiovisuaali.net/api/user/create?username=${username}&password=${password}`)
      .then((response) => {
        if (response.data.created) {
          axios.get(`https://api.audiovisuaali.net/api/user/login?username=${username}&password=${password}`)
            .then((res) => {
              if (res.data.logged) {
                document.cookie = `user=${res.data.cookies.user}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
                document.cookie = `session=${res.data.cookies.session}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
                dispatch({type: "FETCH_USER_FULLFILLED", payload: {id: response.data.user.id, username: response.data.user.username, loggedIn: true}})
              } else {
                dispatch({type: "FETCH_USER_REJECTED", payload: "not logged in"})
              }
            })
            .catch((err) => {
              dispatch({type: "FETCH_USER_REJECTED", payload: err})
            })
        } else {
          dispatch({type: "FETCH_USER_REJECTED", payload: { registerError: response.data.msg } })
        }
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}
