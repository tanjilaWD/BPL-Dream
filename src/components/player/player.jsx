import { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers'

const player = ({playersPromise, setCoin, coin}) => {
    const players = use(playersPromise);
    const [selectedType, setSelectedType] = useState('available');
    console.log(selectedType, 'selectedType');
     const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <div className='container mx-auto my-15'>
          
          <div className='flex justify-between items-center'>
            {selectedType === 'available' ? (<h2 className='font-bold text-3xl'>Available Players</h2>) : (<h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>)}
            <div>
                <button onClick={()=> setSelectedType('available')} className= {`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} mr-4 rounded-r-none rounded-l-xl `}>Available</button>

              <button onClick={()=> setSelectedType('selected')} className={` btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl `}>Selected ({selectedPlayers.length})</button>  
            </div>
          </div>

          { selectedType === 'available' ?( <AvailablePlayers 
           players={players}
           setCoin={setCoin}
           coin={coin}  
           setSelectedPlayers={ setSelectedPlayers} 
           SelectedPlayers={SelectedPlayers}>
           </AvailablePlayers>) : 
           ( <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></SelectedPlayers> )}
          
           
        </div>
    );
};

export default player;