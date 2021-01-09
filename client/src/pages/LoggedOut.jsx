import React from "react";

const LoggedOut = () => {
  const {
    REACT_APP_SPOTIFY_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
   } = process.env;

  const LOGIN_URI = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;

  const login = () => {
    window.location = LOGIN_URI;
  }

  return(
    <div>
      <h1>You are logged out.</h1>
      <button onClick={login}>Log In</button>
    </div>
  );

}

export default LoggedOut