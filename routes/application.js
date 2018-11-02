const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/recipecontrollers.js");

router.get("/", applicationController.index);

module.exports = router;
