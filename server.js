const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const fs = require("fs");
let obj = {};
fs.readFile("jobs.json", handleFile);
function handleFile(err, data) {
  if (err) console.log(err);
  obj = JSON.parse(data);
}

app.get("/api/search", (req, res) => {
  res.send(obj);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
