const express = require("express");
const api = require("../api/staff");
const router = express.Router();

router.get("/getStaff", api.getStaff);
router.put("/updateStaff", api.updateStaff);
router.post("/addStaff", api.addStaff);
router.delete("/deleteStaff", api.deleteStaff);
module.exports = router;
