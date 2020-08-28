const express = require("express");
const app = express();
const port = 8000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`app is listening in PORT ${app.get("port")}`);
});

module.exports = app;
