const { Rank } = require("../models");

module.exports = {
  post: (req, res) => {
    let username = req.body.username;
    let score = req.body.score;

    Rank.create({
      username: username,
      score: score,
    })
      .then((data) => {
        res.status(201).json({ message: "Save Success" }).end();
      })
      .catch((error) => {
        console.log(error);
        res.status(502).send(error);
      });
  },

  get: (req, res) => {
    Rank.findAll({
      limit: 7,
      order: [["score", "DESC"]],
    })
      .then((data) => {
        res.status(200).json(data).end();
      })
      .catch((error) => {
        console.log(error);
        res.status(501).send(error);
      });
  },
};
