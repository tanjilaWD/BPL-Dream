import { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const player = ({playersPromise}) => {
    const players = use(playersPromise);
    const [selectedType, setSelectedType] = useState('available');
    console.log(selectedType, 'selectedType');
    return (
        <div className='container mx-auto my-15'>
          
          <div className='flex justify-between items-center'>
            {selectedType === 'available' ? (<h2 className='font-bold text-3xl'>Available Players</h2>) : (<h2 className='font-bold text-3xl'>Selected Players 2/10</h2>)}
            <div>
                <button onClick={()=> setSelectedType('available')} className= {`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} mr-4 rounded-r-none rounded-l-xl `}>Available</button>

              <button onClick={()=> setSelectedType('selected')} className={` btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl `}>Selected (0)</button>  
            </div>
          </div>

          { selectedType === 'available' ? ( <AvailablePlayers players={players}></AvailablePlayers>) : ( <SelectedPlayers></SelectedPlayers> )}
        </div>
    );
};

export default player;