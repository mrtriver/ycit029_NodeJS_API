const express = require("express");


const myMap = require("./myMap");  //This code imports from myMap.js
// console.log("taco", myMap);




const app = express();
app.listen(3333, () => {
    console.log("Murat now I am listening to you");
})

app.get("/myMap",(req,res) => {        //PATH /Users/muratirmak/Documents/mcGillJavaScript/ycit029_NodeJS_API/serverTrial/main.js
    // const data = [];
    // for(let p of myMap){
    //     console.log("tacooo", p);
    //     data.push(p);
    // }
    // res.json(data);
    // res.json(Object.fromEntries(myMap));
    res.json(Array.from(myMap));
});

// console.log(myMap.entries());

// app.post("/mrtPost", (req, res) => {
   
//     console.log("This is my first Post Murat");
// })

console.log("I am the first");
