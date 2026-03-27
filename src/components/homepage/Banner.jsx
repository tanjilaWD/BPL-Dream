import React from 'react';
import bannerImg from '../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className='min-h-[60vh] container mx-auto my-10 bg-green-700 rounded-3xl p-10'>
           <div className='text-center space-y-4'>
            <div className='flex justify-center items-center'>
                 <img src={bannerImg} alt="Banner Image"/>
            </div>
          
            <h2 className='text-4xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-2xl text-[#FFFFFF]'>Beyond Boundaries Beyond Limits</p>
            <button className="px-6 py-3 text-black font-semibold rounded-lg 
                         bg-[#E7FE29]">
            Claim Free Credit
           </button>
           </div>
        </div>
    );
};

export default Banner;