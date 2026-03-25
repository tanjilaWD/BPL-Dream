import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const AvailablePlayers = ({players}) => {
    console.log(players);
    return (
    <div>
 
    {
        
    }

    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser /> Card Title</h2>
    <div className='flex justify-between items-center'>
    <div className='flex gap-2 items-center'>
      <FaFlag />  
      <p>Bangladesh</p>
    </div>
     <button className='btn'>All Rounder</button>
      </div>
       <div className="divider"></div>
       <h2 className='font-bold'>Rating</h2>
       <div className='flex justify-between gap-4'>
        <p className='font-bold'>Left-Hand-Bat</p>
        <p>Left-Hand-Bowling</p>
       </div>

       <div className='flex justify-between gap-4 items-center'>
        <p className='font-semibold'>Price: $1500000</p>
       <button className="btn">Choose Player</button>
       </div>
    
   
    </div>
    </div>
</div>
        
    );
};

export default AvailablePlayers;