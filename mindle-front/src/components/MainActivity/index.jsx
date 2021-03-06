import React, {useState} from 'react';
import '../../css/MainActivity/MainActivity.css'
import SwipableCard from './SwipableCard';
import ArtistInfos from './Infos/index.jsx';

const MainActivity = () => {

    const [coverArt, setCoverArt] = useState("coverArt")
    const tempCoverArt = "https://i.scdn.co/image/ab67616d0000b2736f43a625b608f7177caa18c9"

    const [artistInfos, setArtistInfos] = useState(
        {
            artistName: "Nom de l'Artiste",
            titleSong: "Titre de la chanson",
            albumName:"Nom de l'album"
        }
    )

    return (
        <div id='mainActivity'>
            <SwipableCard coverArt={tempCoverArt} />

            <ArtistInfos infos={artistInfos} />
        </div>
    )
}

export default MainActivity