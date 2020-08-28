const express = require("express");
const app = express();
const port = 8000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const RankRouter = require("./route/Rank");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://checknumber.s3-website.ap-northeast-2.amazonaws.com"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.use("/rank", RankRouter);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`app is listening in PORT ${app.get("port")}`);
});

module.exports = app;
