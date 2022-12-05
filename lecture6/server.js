const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {      //3 SERVER PARSES REQUEST req/res obj created
    console.log("request was received", req.method, req.url, req.body);
    next();
});

app.use(                       //4 RESPONSIBLE FOR PARSING THE BODY process the req and send back response
    express.static("public", {
        extensions: ["html"],
    })
);

const user = {
    id: "12345",
    firstName: "Murat",
    lastName: "Irmak",
    isSignedIn: false,
};

app.get("/user-profile", (req, res) => {
    if (user.isSignedIn) {
        res.status(200).json(user);
    } else {
        res.status(401).send("hey, you gotta sign in");
    }
});

app.post("/sign-in", (req, res) => {
    user.isSignedIn = true;

    res.status(200).redirect("/"); // Redirects to the Home Page
});

app.post("/sign-out", (req, res) => {
    user.isSignedIn = false;

    res.status(200).send("you've signed out"); // ... but not here ??
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});