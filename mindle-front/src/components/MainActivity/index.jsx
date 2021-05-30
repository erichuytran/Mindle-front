import React, { useEffect, useState, useMemo } from 'react';
import '../../css/MainActivity/MainActivity.css'
import SwipableCard from './SwipableCard';
import Infos from './Infos/index.jsx';
import jsonData from '../../mockedData/mockedData.json'
import axios from 'axios';
import TinderCard from 'react-tinder-card'


const MainActivity = ({ accessToken }) => {
  const initSongsList = [];
  let songListState = initSongsList;


  // const [songList, setSongList] = useState([]);

  const randomOffset = Math.floor(Math.random() * 1000);
  
  const getRandomSearch = () => {
    // Liste des caractères pouvant être choisis aléatoirement pour la recherche
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    // Récupération d’un caractère aléatoire dans characters
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    let randomSearch = '';
    randomSearch = randomCharacter;
    
    return randomSearch;
  }

  const addNewSongList = (tracks) => {
    tracks["items"].forEach(element => {

      const songItem = {
        title: element["name"],
        artist: element["artists"][0]["name"],
        album: element["album"]["name"],
        cover: element["album"]["images"][0]["url"]
      };
  
      /*const newSongList = songList
      newSongList.push(songItem)
      setSongList(newSongList)*/
      initSongsList.push(songItem);
    });
  }


  const [songList, setSongList] = useState(initSongsList);
  const [lastDirection, setLastDirection] = useState()


  const getRandomSong = () => {
    axios.get('https://api.spotify.com/v1/search?q=' + getRandomSearch() + '&offset=' + randomOffset + '&type=track&limit=2',
    {headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(response => response.data)
  .then((resp) => {
    addNewSongList(resp["tracks"])
  })};

  useEffect(() => {
    accessToken && getRandomSong();
  }, []);

  const childRefs = useMemo(() => Array(songList.length).fill(0).map(i => React.createRef()), []);
  const alreadyRemoved = []
  const swiped = (direction, songToDelete) => {
    console.log('removing: ' + songToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(songToDelete)
  };

  const outOfFrame = (title) => {
    console.log(title + ' left the screen!')
    songListState = songListState.filter(song => song.title !== title)
    setSongList(songListState)
  };

  const swipe = (dir) => {
    // const cardsLeft = characters.filter(song => !alreadyRemoved.includes(song.name))
    // if (cardsLeft.length) {
    //   const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
    //   const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
    //   alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //   childRefs[index].current.swipe(dir) // Swipe the card!
    // }
  };

  return (
    <div id='mainActivity'>
      
      <div className='cardContainer'>
        {songList.map((songCard, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={songCard.title} onSwipe={(dir) => swiped(dir, songCard.title)} onCardLeftScreen={() => outOfFrame(songCard.title)}>
            <div style={{ backgroundImage: 'url(' + songCard.cover + ')' }} className='card'>
              <h3>{songCard.title}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {/* {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>} */}
      
      <div>
        <a href='/'>DECONNEXION</a>
      </div>
    </div>
  )
}

export default MainActivity


