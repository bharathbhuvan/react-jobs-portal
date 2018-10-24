const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const fs = require("fs");
let obj = {};

// Read the file and send to the callback
fs.readFile("jobs.json", handleFile);

// Write the callback function
function handleFile(err, data) {
  if (err) console.log(err);
  obj = JSON.parse(data);
  // You can now play with your datas
}

app.get("/api/hello", (req, res) => {
  res.send(obj);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
