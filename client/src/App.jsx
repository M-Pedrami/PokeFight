import './App.css'
import Pokemons from './components/Pokemons/Pokemons'
import {Routes, Route} from "react-router-dom";
import Pokemon from './components/Pokemon/Pokemon';
import Info from './components/Info/Info';

function App() {
  

  return (
    
      <Routes>
        <Route path='/pokemons' element= {<Pokemons/>} />
        <Route path='/pokemons/:id' element = {<Pokemon/>} />
        <Route path= '/pokemons/:id/:info' element = {<Info/>} />
      </Routes>   
    
  )
}

export default App
