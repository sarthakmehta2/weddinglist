import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateGuest } from './components/CreateGuest'
import { Guest } from './components/Guest'

function App() {

const[guest, setGuest] = useState([]);

useEffect(()=>{
fetch("http://localhost:3002/lists")
.then(async function(res){
  const json = await res.json();
  setGuest(json.list);
})
},[])

  return (
    <div>
      <CreateGuest/>
      <Guest guest = {guest}/>
    </div>
  )
}

export default App
