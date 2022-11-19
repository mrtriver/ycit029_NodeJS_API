console.log("M.Irmak Hello");
const express = require('express')

const pokedex = require("./pokedex")
console.log("taco", pokedex);
const app = express()

//Read (List) all pokemons
app.get("/pokemon", (req, res)=>{
    res.json({name: "Murat Irmak"});
    
});
app.listen(3456, ()=>{
   console.log("Server started successfully!");
})

