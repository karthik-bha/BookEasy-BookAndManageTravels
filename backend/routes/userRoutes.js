const express = require("express");
const {
  submitBooking,
  getAllPackages,
} = require("../controllers/userController");

const router = express.Router();

router.get("/packages", getAllPackages);
router.post("/packages/bookings/submit", submitBooking);

// router.get("/packages/:packageId", getPackageById);

// router.get("/packages/:packageId/invoice", displayInvoice);

module.exports = router;
