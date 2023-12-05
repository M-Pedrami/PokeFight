import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/pokemons/${id}`)
  }
  const { id, info } = useParams();
  const [details, setDetails] = useState();
  const getInfo = async (ID, Info) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemon/${ID}/${Info}`
      );
      return response.data;
    } catch (error) {
      console.log("ERROR FROM THE GETINFO", error);
    }
  };

  useEffect(() => {
    getInfo(id, info)
      .then((res) => setDetails(res))
      .catch((err) => console.log("ERROR FROM INSIDE USEEFFECT", err));
  }, []);
  console.log("AFTER USEEFFECT", details);
  return (
    <div>
      <h1>{info.charAt(0).toUpperCase() + info.slice(1)} of the Pokemon</h1>
      {info === "type" ? (
        details?.map((type) => <p>{type}</p>)
      ) : info === "name" ? (
        <>
          <p>English : {details?.english}</p>
          <p>Japanese: {details?.japanese}</p>
          <p>French: {details?.french}</p>
          <p> Chinese: {details?.chinese}</p>
        </>
      ) : info === "base" ? (
        <>
          
          <p>Attack: {details?.Attack}</p>
          <p>Defense: {details?.Defense}</p>
          <p>HP: {details?.HP}</p>
          <p>Sp. Attack: {details?.[`Sp. Attack`]}</p>
          <p>Sp. Defense: {details?.[`Sp. Defense`]}</p>
          <p>Speed: {details?.Speed}</p>
        </>
      ) : (
        <h1>Nothin To show</h1>
      )}
      <button onClick={handleClick}>Back</button>
    </div>
  );
}
