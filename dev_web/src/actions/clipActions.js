import axios from "axios";

export default function fetchClips() {
  return function(dispatch) {
    const cookieone = getCookie("user");
    const cookietwo = getCookie("session");
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
