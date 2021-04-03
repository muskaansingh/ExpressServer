const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Started Learning Express.js");
});

app.listen(3002, () => {
    console.log(`Server started on port 3002`);
});
