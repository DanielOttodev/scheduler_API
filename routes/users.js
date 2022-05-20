const express = require("express");
const api = require("../api/users");
const router = express.Router();

router.get("/getUsers", api.getUsers);
router.post("/updateUser", api.updateUser);
module.exports = router;
