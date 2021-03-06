import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ArtistInfos = ({infos}) => {
    return (
        <div>
            <h3>{infos.artistName} - {infos.titleSong}</h3>
            <h3>{infos.albumName}</h3>  
        </div>
    )
}

export default ArtistInfos