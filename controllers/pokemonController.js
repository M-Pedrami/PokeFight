const data = require("../data.json");

const getPokemons = (req, res) => {
  res.send(data);
};

const getPokemon = (req, res) => {
  const { id } = req.params;
  const foundPokemon = data.filter((pokemon) => pokemon.id === +id);
  if (foundPokemon.length > 0) {
    res.json(foundPokemon[0]);
  } else {
    res.status(404).send({ message: "The id is invalid" });
  }
};

const getPokemonInfo = (req, res) => {
  const { id, info } = req.params;
  const foundPokemon = data.filter((pokemon) => pokemon.id === +id);
  if (foundPokemon.length === 0) {
    res.status(404).send({ message: "The id is invalid" });
  } else {
    if (info === "type" || info === "base" || info === "name") {
      const resInfo = foundPokemon[0];
      res.send(resInfo[info]);
    } else {
      res
        .status(404)
        .send({ message: "the parameter must be 'type' or 'name' or 'base'" });
    }
  }
};


module.exports = { getPokemon, getPokemons, getPokemonInfo };
