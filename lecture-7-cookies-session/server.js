const express = require("express");
const session = require("express-session");    //session initialised 
const app = express();


// *************We brough the session with this middleware
app.use(session({             
    secret:"keyboard cat",
    resave:true,
    saveUninitialized:false,
    cookie:{secure:false},    //for HTTPS secure:true
}          //Sure there is next here but invisible in session
));


//************Middleware that everytime tells us request was receieved  
app.use((req, res, next) => {
    console.log("Request was received",req.method,req.url, req.session);
    if(!req.session.myStuff){
         req.session.myStuff = {
        name:"Session test",
        counter: 0,
    }
   
    }else {
        req.session.myStuff.counter++;
    }

    next();   //a custom middleware that we must put the next()
})


//*******This connects with html files in the public folder*/

app.use(express.static("public", {
    extensions: ["html"],
}));

//For Test purpose
app.get("/grocery-list/item", (req, res, next)=>{
  
    res.send("Irmak Family")
})


app.get("/grocery-list", (req, res) => {
    // if (!req.session.groceryList) {
    //     res.json([]);
    // } else {
    //     res.json(req.session.groceryList);
    // }

    res.json(req.session.groceryList || []);
});

app.post("/grocery-list/item", (req, res) => {
    // console.log("taco", req.query);

    if (!req.session.groceryList) {
        req.session.groceryList = [];
    }

    req.session.groceryList.push(req.query.value);
    res.json(req.session.groceryList);
});

app.delete("/grocery-list", (req, res) => {
    if (req.session.groceryList){
        console.log("Deleting grocery list");
        delete(req.session.groceryList);
        res.status(200).send("");
    }else {
         res.status(400).send("Your list is empty");
    }
});


//*********Listen to the port
app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})





