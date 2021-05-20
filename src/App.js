//import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  // to grab anything from the datalayer, use the code below
  // the "dispatch" is a gun used to get or update the datalayer
  const [{ token }, dispatch] = useDataLayerValue();

  // run a code based on a given piece of information
  useEffect(() => {
    const hash = getTokenFromUrl();
    //make access token not visible to users
    window.location.hash = "";
    let _token = hash.access_token;
    const headers = {
      Authorization: `Bearer ${_token}`,
    };
    if (_token) {
      //setToken(_token);
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //allow spotify to talk/interact with our react app

      spotify.getMe().then((user) => {
        //console.log("👨", user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcDOIuRBvEp7m").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }

    //console.log("I HAVE A TOKEN 👉 ", token);
  }, [token, dispatch]);

  //console.log("👨", user);
  //console.log("👽", token);
  //{token ? <Player spotify={spotify} /> : <Login />}
  //{!token && <Login />}
  //{token && <Player spotify={spotify} />}

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
