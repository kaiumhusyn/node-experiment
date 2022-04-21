const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello fucking World!");
});
app.get("/users", (req, res) => {
  res.send({ id: 1, name: "xyz", job: "Nothing" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
