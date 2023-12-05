import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () =>{
    try {
      const response = await axios.get('http://localhost:3001/pokemon')
      return response.data
    } catch (error) {
      console.log(":::ERROR FROM POKEMONS COMPONENT",error)
    }
  }
   useEffect(()=>{
    getPokemons()
    .then(res=>setPokemons(res))
    .catch(err=>console.log("ERROR FROM USEEFFECT",err))
  }, []) 
  console.log(pokemons)

  
  return (
    <div>
     <h1>List of Pokemons</h1> 
     {pokemons.map(pokemon=>(
      <>
      <h3>{pokemon.name.english}</h3>
      <button><Link to={`/pokemons/${pokemon.id}`} >More</Link></button>
      </>
     ))}
    </div>
  )
}
