const express = require("express");
const router = express.Router();

const { RankController } = require("../controller");

router.get("/get", RankController.get);
router.post("/post", RankController.post);

module.exports = router;
