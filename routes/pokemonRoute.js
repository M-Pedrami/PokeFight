// import express from 'express'(ES6)
const express = require("express");
const router = express.Router();
const data = require("../data.json");
const pokemonController = require('../controllers/pokemonController')

//const { getPokemons, getPokemon, getPokemonInfo} = require('../controllers/pokemonController')



router.get("/", pokemonController.getPokemons);


router.get("/:id", pokemonController.getPokemon);

router.get('/:id/:info', pokemonController.getPokemonInfo  )

//export default router(ES6);
module.exports = router;
