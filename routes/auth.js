const express = require("express");
const api = require("../api/auth");
const router = express.Router();

router.get("/validate", api.auth);

module.exports = router;
