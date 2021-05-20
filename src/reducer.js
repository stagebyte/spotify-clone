// design the store - create the initial state
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  //token: null,
  // Remove after you finish developing
  // token:
  //  "BQBXvBYStSW_cIgvLJRo5vXEDGdKmMAB3uUCvapblX3Ly3gWm-5BN_PD-LHUJpT3xjqwPgHZZxB__wM8I4tgIXiW3n9FOlcF9QbfbJ4xwJFDc1y9s6q38m4xt7L_rhSjYyzuuUBi7rfJmKWB4UkS0QtlopMZhma4NEWofaIC5_rZLWSXHgwr",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
