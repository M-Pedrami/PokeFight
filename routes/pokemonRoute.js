// import express from 'express'(ES6)
const express = require("express");
const router = express.Router();
const data = require("../data.json");
const pokemonController = require('../controllers/pokemonController')

/* app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  const foundPokemon = data.filter(pokemon => pokemon.id === +id);
  res.json(foundPokemon);
}); */

router.get("/", pokemonController.getPokemons);


router.get("/:id", pokemonController.getPokemon);

//export default router(ES6);
module.exports = router;
