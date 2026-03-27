
import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/Banner'
import Navber from './components/navber/Navber'
import Player from './components/player/Player';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async()=>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000)
  

  return (
    <>
     <Navber coin={coin} ></Navber>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <Player playersPromise={playersPromise} setCoin={setCoin} coin={coin} ></Player>
     </Suspense>

     {/* react toastify */}
     <ToastContainer/>
    </>
  )
}

export default App
