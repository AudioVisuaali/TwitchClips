export default function sclips(state={
    clips: [],
    fetching: false,
    fetched: true,
    error: null,
  },  action) {

  switch (action.type) {
    case "FETCH_CLIPS": {
      return {...state, fetching: true}
    }
    case "FETCH_CLIPS_REJECTED": {
      return {...state, fetching: false, error: action.playload}
    }
    case "FETCH_CLIPS_FULLFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.playload
      }
    }
    default: {
        return state;
    }
  }
}
