import React, { use } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';

const player = ({playersPromise}) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players);
    return (
        <div className='container mx-auto'>
           player : {players.length}
           <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default player;