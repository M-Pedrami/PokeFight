import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link, useNavigate} from'react-router-dom'

export default function Pokemon() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/pokemons')
  }
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const getPokemon = async (ID) => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemon/${ID}`);
      return response.data;
    } catch (error) {
      console.log("ERROR FROM getPokemon hook", error);
    }
  };
  useEffect(() => {
    getPokemon(id)
      .then((res) => setPokemon(res))
      .catch((err) => console.log("ERROR INSIDE USEEFFECT", err));
  }, []);
  console.log("POKEMON AFTER USEEFFECT", pokemon)
  return <div>
    <h1>Name : {pokemon.name?.japanese}</h1>
    <p>Type: {pokemon.type}</p>
    <p>Attack: {pokemon.base?.Attack}</p>
    <p>Defense: {pokemon.base?.Defense}</p>
    <p>HP: {pokemon.base?.HP}</p>
    <p>Sp. Attack: {pokemon.base?.[`Sp. Attack`]}</p>
    <p>Sp. Defense: {pokemon.base?.[`Sp. Defense`]}</p>
    <p>Speed: {pokemon.base?.Speed}</p>
    <button><Link to={`/pokemons/${pokemon.id}/name`}>Name</Link></button>
    <button><Link to={`/pokemons/${pokemon.id}/type`}>Type</Link></button>
    <button><Link to={`/pokemons/${pokemon.id}/base`}>Base</Link></button>
    <br />
    <button onClick={handleClick}>Back</button>
    
  </div>;
}
