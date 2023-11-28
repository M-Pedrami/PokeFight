const express = require("express");
const app = express();
const PORT = 3001;

app.get('/LetsFight', function (req, res){
  res.send({message: "eudes is cool"})
})

app.listen(PORT, ()=>console.log(`server is listening on http://localhost:${PORT}`))