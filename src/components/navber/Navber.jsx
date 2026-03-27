import React from 'react';
import dollerImg from '../../assets/dollar.png';
import logo from '../../assets/logo.png';


const Navber = ({coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto my-5">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logo} alt="Logo" /></a>
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-2 font-bold text-2xl">
        <p>{coin} Coins</p>
      <img src={dollerImg} alt="Doller Img" />
    </button>
  </div>
</div>
    );
};

export default Navber;