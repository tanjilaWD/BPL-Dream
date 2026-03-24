
import './App.css'
import Banner from './components/homepage/Banner'
import Navber from './components/navber/Navber'

const fetchPlayer = async()=>{
  const res = await fetch('../public/data.json')
}

function App() {
  

  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
    </>
  )
}

export default App
