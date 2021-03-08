import React from 'react';
import '../../css/MainActivity/SwipableCard.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SwipableCard = ( {coverArt} ) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={coverArt} />
                <Card.Body>
                    <Button variant="dark" id="btnPlay">Play</Button>
                </Card.Body>
            </Card>
            <a href="#like" className="swipeIcon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg></a>
            <a href="#unlike" className="swipeIcon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></a>
        </div>
    )
}

export default SwipableCard