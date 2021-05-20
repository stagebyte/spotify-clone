// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

//const PORT = window.location.port == 3000 ? ":3000/" : "/";
let PORT;
if (window.location.port == 3000) {
  PORT = ":3000/";
} else if (window.location.port == 5000) {
  PORT = ":5000/";
} else {
  PORT = "/";
}

//const redirectUri = "http://localhost:3000/";
//const redirectUri = `http://localhost:${PORT}/`;

const redirectUri = `${window.location.protocol}//${window.location.hostname}${PORT}`;

const clientId = "58da9766771644a8a13ffa1a7e407a78";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//export access_token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
