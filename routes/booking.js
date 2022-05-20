const express = require("express");
const api = require("../api/booking");
const router = express.Router();

router.get("/getBookings", api.getBookings);
router.get("/getBooking", api.getBooking);
router.get("/getBookingByStaff", api.getBookingByStaff);
router.get("/getbookingByClient", api.getbookingByClient);
router.put("/updateBooking", api.updateBooking);
router.post("/addService", api.updateBooking);
router.delete("/addBooking", api.addBooking);
module.exports = router;
