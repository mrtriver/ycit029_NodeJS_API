//Get the "express module" initiate
const express = require("express");

//create an instance of application
const app = express();


//Attach all request handlers 
//express creates the req and res objects
//one of the handlers is gonna mathc with the url path that client give
app.get("/",(req, res)=>{})
app.post("/",(req, res)=>{})
app.put("/",(req, res)=>{})
app.patch("/",(req, res)=>{})
app.delete("/",(req, res)=>{})

//Listen on port
app.listen(3000,()=>{
    console.log("server is running Murat.");
});