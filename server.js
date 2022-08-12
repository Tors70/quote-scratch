const express = require("express");

const app = express();

const { quotes } = require("./quotes");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res) => {
  res.send({
    quote: getRandomElement(quotes),
  });
});

app.listen(PORT, () => {
  console.log("Server listening on port:" + PORT);
});
