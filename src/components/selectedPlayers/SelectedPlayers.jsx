
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}) => {
    console.log(selectedPlayers, 'selectedPlayers');
    const handleDeleteSelectedPlayer = (player) =>{
        console.log(selectedPlayers, 'selectedPlayers');
        const filteredPlayers = selectedPlayers.filter(selectedPlayers => selectedPlayers.playerName != player.playerName)

        console.log(filteredPlayers, 'filteredPlayers');
        setSelectedPlayers(filteredPlayers);
    }
    return (
        <div>
            {
             selectedPlayers.map((player, ind)=>{
             return <div key={ind} className='flex items-center gap-6 justify-between p-5 rounded-2xl border my-5'>
                
                <div>
                  <img src={player.playerImage} alt="Player Image" className='h-20 w-auto rounded-md' />
                  <div>
                    <h2 className='flex items-center gap-2 font-bold text-xl'><FaUser /> {player.playerName}</h2>
                    <h2>{player.playerType}</h2>
                  </div>
                </div>

              <div>
                <button className='text-red-600 btn' onClick={()=>handleDeleteSelectedPlayer(player)}><MdDelete /></button>
              </div>
                </div>
             })   
            }
        </div>
    );
};

export default SelectedPlayers;