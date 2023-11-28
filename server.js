const express = require("express");
const app = express();
const PORT = 3001;
const data = require("./data.json");

app.use(express.json());

app.get("/pokemon", function (req, res) {
  res.send(data);
});

app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  console.log(typeof id)
  const foundPokemon = data.filter(pokemon => pokemon.id === +id);
  console.log(foundPokemon);
  res.json(foundPokemon);
});


app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
