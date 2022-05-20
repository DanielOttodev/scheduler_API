const express = require("express");
const api = require("../api/services");
const router = express.Router();

router.get("/getServices", api.getServices);
router.put("/updateUser", api.updateService);
router.post("/addService", api.addService);
router.delete("/deleteService", api.deleteService);
module.exports = router;
