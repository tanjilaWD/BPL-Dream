
import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/Banner'
import Navber from './components/navber/Navber'
import Player from './components/player/Player';

const fetchPlayer = async()=>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  

  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <Player playersPromise={playersPromise}></Player>
     </Suspense>
    </>
  )
}

export default App
