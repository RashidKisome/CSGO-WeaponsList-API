const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;




app.get("/", (req, res) => {
    res.send("Yo")
}) 

app.get("/weapons-list", (req, res) => {
    res.send(importData)
}) // Listan med alla vapen 

app.listen(port, () => {
    console.log(`Lyssnarrr http://localhost:${port}`);
});


/* 
Hade applikationen varit större så hade 
vi behövt en en App.json fil, för tex enviroment varibles, add-ons & liknande.

*/

