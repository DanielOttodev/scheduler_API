const express = require("express");
const api = require("../api/clients");
const router = express.Router();

router.get("/getClientList", api.getClientList);
router.get("/getAllClient", api.getAllClient);
router.get("/getClient/:clientID", api.getClient);
router.get("/updateClient", api.updateClient);
router.get("/deleteClient", api.deleteClient);
module.exports = router;
