const express = require("express");
const router = express.Router();

const{
    postTranskas
} = require("../controllers/Supplier");

// Endpoints
router.post("/transkas",postTranskas);

module.exports = router;