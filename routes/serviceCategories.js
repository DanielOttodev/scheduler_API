const express = require("express");
const api = require("../api/serviceCategories");
const router = express.Router();

router.get("/getSCat", api.getSCat);
router.put("/updateSCat", api.updateSCat);
router.post("/addSCat", api.addSCat);
router.delete("/deleteScat", api.deleteScat);
module.exports = router;
