const express = require("express");
const router = express.Router();
const kitchenController = require("../controllers/kitchenController");

router.post("/add", kitchenController.addKitchen);
router.get("/", kitchenController.getKitchens);
router.get("/:id", kitchenController.getKitchenById);

module.exports = router;
