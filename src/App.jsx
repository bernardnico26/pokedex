import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import NameCoach from './pages/NameCoach'
import Pokedex from './pages/Pokedex'
import ProtectedRouter from './Components/ProtectorRouter'
import { useEffect, useState } from 'react'
import axios  from "axios"
import { useSelector } from 'react-redux'
import Head from './Components/Head'
import PokemonDetails from './pages/PokemonDetails'
import NotFound from './pages/NotFound'

function App() {
  const [dataPokemon, setDataPokemon] = useState({})
  const [change, setChange] = useState(1)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
  const show = useSelector(state => state.printHeader)
  const name = useSelector( state => state.coachName)
  
  useEffect(()=>{
      axios
          .get(url)
          .then(res=> setDataPokemon(res.data))
          .catch(error=>console.error(error))
  },[url])
  const changePage =(data)=>{
    setUrl(data)
  }
  return (
    <HashRouter>
      {show&&<Head name={name} changePage={changePage} setChange={setChange}/>}
      <Routes>
        <Route path='/' element={ <NameCoach/> }/>
        <Route element={<ProtectedRouter/>}>
          <Route path='/Pokedex' element={ <Pokedex changePage={changePage} dataPokemon={dataPokemon} change={change} url={url}/> }/>
          <Route path='/Pokedex/:id' element={ <PokemonDetails/>}/>
          <Route path='/notFound' element={ <NotFound /> }/>
        </Route>
        
      </Routes>
    </HashRouter>
  )
}

export default App
