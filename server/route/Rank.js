const express = require("express");
const router = express.Router();

const { RankController } = require("../controller");

router.get("/rank/get", RankController.get());
router.post("/rank/post", RankController.post());

module.exports = router;
