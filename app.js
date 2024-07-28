const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Express"));

app.listen(3100, () => console.log("Server ready on port 3000."));

exports.app = app;
