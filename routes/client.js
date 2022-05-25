const express = require("express");
const api = require("../api/clients");
const router = express.Router();

router.get("/getClientList", api.getClientList);
router.get("/getAllClient", api.getAllClient);
router.get("/getClient/:clientID", api.getClient);
router.post("/createClient", api.createClient);
router.put("/updateClient", api.updateClient);
router.delete("/deleteClient", api.deleteClient);
module.exports = router;
