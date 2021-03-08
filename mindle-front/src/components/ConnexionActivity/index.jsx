import React, { useEffect } from 'react'

const ConnexionActivity = ({ setNewHash = () => { } }) => {
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

    const executeChangeHash = () => {
        const hash = window.location.hash
        .substring(1)
        .split("&")
      .reduce(function (initial, item) {
            if (item) {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {})
    setNewHash(hash)
    }

    useEffect(() => {
        const url = window.location.hash
        url.startsWith("#access_token") && executeChangeHash()
    },[])

    return (
        <div>
            <button onClick={() => { openConnexion() }}  >CONNEXION</button>
        </div>
    )
}

export default ConnexionActivity