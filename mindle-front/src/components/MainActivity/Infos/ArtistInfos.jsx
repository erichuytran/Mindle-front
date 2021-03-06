import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ArtistInfos = ({artistInfos}) => {
    return (
        <div>
            <h3>{artistInfos.artistName} - {artistInfos.titleSong}</h3>
            <h3>{artistInfos.albumName}</h3>  
        </div>
    )
}

export default ArtistInfos