const path = require("path")
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname, "public")
const cors = require("cors")

let scores = []

app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use(cors())

app.get("/scores", (req, res) => {
  res.send(scores)
});

app.post("/scores", (req, res) => {
  scores.push(req.body);
  scores.sort((a,b) => (b.score - a.score));
  scores = scores.slice(0,3);
  res.status(201);
  res.end();
});

app.listen(3000);