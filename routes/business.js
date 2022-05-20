const express = require("express");
const api = require("../api/business");
const router = express.Router();

router.put("/updateBInfo", api.updateBInfo);

module.exports = router;
