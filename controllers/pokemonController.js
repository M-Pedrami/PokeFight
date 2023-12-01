const data = require("../data.json");

const getPokemons = (req, res) => {
  res.send(data);
};

const getPokemon = (req, res) => {
  const { id } = req.params;
  const foundPokemon = data.filter((pokemon) => pokemon.id === +id);
  if (foundPokemon.length > 0) {
    res.json(foundPokemon);
  } else {
    res.status(404).send({ message: "The id is invalid" });
  }
};

const getPokemonInfo = (req, res) => {
  res.send("Test");
};

module.exports = { getPokemon, getPokemons, getPokemonInfo };
