const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let app = express();

// 3rd party middleware
app.use(cors());
app.use(bodyParser());

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

module.exports = {
  app
};
