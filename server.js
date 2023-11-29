const express = require("express");
const app = express();
const PORT = 3001;
const data = require("./data.json");
const router = require("./routes/pokemonRoute")


app.use(express.json());
app.use('/pokemon', router);




app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
