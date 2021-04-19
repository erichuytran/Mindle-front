import React, { useEffect, useState } from 'react';
import '../../css/MainActivity/MainActivity.css'
import SwipableCard from './SwipableCard';
import Infos from './Infos/index.jsx';
import jsonData from '../../mockedData/mockedData.json'
import axios from 'axios';


const MainActivity = ({ accessToken }) => {

  const [title, setTitle] = useState("title")
  const [artist, setArtist] = useState("artist")
  const [album, setAlbum] = useState("album")
  const [coverArt, setCoverArt] = useState("coverArt")


  const [artistInfos, setArtistInfos] = useState(
    {
      artistName: "Nom de l'Artiste",
      titleSong: "Titre de la chanson",
      albumName: "Nom de l'album"
    }
  )

  const [isLoaded, setIsLoaded] = useState()
  const [error, setError] = useState()
  const [items, setItems] = useState()
  



  const getRandomSearch = () => {
    // Liste des caractères pouvant être choisis aléatoirement pour la recherche
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    // Récupération d’un caractère aléatoire dans characters
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    let randomSearch = '';
    randomSearch = randomCharacter;

    return randomSearch;
  }

  const randomOffset = Math.floor(Math.random() * 1000);

  const getRandomSong = () => {
    axios.get('https://api.spotify.com/v1/search?q=' + getRandomSearch() + '&offset=' + randomOffset + '&type=track&limit=1',
    {headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(response => response.data)
  .then((resp) => {
    console.log("Title : ", resp["tracks"]["items"][0]["name"])
    setTitle(resp["tracks"]["items"][0]["name"])

    console.log("Artists : ", resp["tracks"]["items"][0]["artists"][0]["name"])
    setArtist(resp["tracks"]["items"][0]["artists"][0]["name"])

    console.log("Album : ", resp["tracks"]["items"][0]["album"]["name"])
    setAlbum(resp["tracks"]["items"][0]["album"]["name"])

    console.log("CoverArt : ", resp["tracks"]["items"][0]["album"]["images"][0]["url"])
    setCoverArt(resp["tracks"]["items"][0]["album"]["images"][0]["url"])

  })
  }

  useEffect(() => {
    accessToken && getRandomSong();
  }, [])

  return (
    <div id='mainActivity'>

      <img src={ coverArt }></img>
      <h4>Artist : { artist } </h4>
      <h4>Album : { album } </h4>
      <h4>Title : { title }</h4>

      <div>
        <a href='/'>DECONNEXION</a>
      </div>
      {/* <SwipableCard  /> */}

      {/* <Infos infos={artistInfos} /> */}
    </div>
  )
}

export default MainActivity


