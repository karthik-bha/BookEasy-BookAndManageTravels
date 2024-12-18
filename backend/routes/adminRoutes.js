const express = require("express");
const { createPackage, authenticate, showStatus,getAllBookings, getAllPackages, deletePackage,updatePackage, deleteBooking } = require("../controllers/adminController");
const router = express.Router();



router.post("/authenticate", authenticate);
router.get("/", showStatus);
router.get("/bookings", getAllBookings)


router.get("/packages", getAllPackages);
router.post("/packages/create", createPackage);
router.delete("/packages/:packageId/delete", deletePackage);
router.put("/packages/:packageId/update", updatePackage);
router.delete("/bookings/:id/delete", deleteBooking);


module.exports = router;
