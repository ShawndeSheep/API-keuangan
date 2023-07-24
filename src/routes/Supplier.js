const express = require("express");
const router = express.Router();

const{
    postTranskas,
    getId
} = require("../controllers/Supplier");

// Endpoints
router.post("/transkas",postTranskas);
router.get("/get/:id",getId)

module.exports = router;