import React, {useEffect} from 'react'

const ConnexionActivity = ({ handleConnexionStatus}) => {

    const CLIENT_ID = 'ac2686602dd842ef9dabff18e06e527a';
    const REDIRECT_URI = 'http://localhost:3000/';
    const SCOPES = '';
    const LoginURL =
            'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(SCOPES) +
            '&response_type=token'

    const openConnexion = () => {
        window.location = LoginURL;
    }

    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
  }, {});

    return (
        <div>
            <button onClick={() => { openConnexion() }}  >CONNEXION</button>
            {hash.length != 0 && handleConnexionStatus()}
        </div>
    )
}

export default ConnexionActivity