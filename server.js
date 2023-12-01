const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./routes/pokemonRoute")

//Middleware to Parse the body of the payload
app.use(express.json());


//Paths to the router
app.use('/pokemon', router);




app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
