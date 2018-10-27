const express = require("express");
const path = require('path');
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
