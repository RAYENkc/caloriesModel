// 1. import dependencies
const express = require("express");
const router = express.Router()
const request = require("request-promise")

// 2. Setup router
router.post("/score",async (req,res) => {
    res.send("hello word!!")
})

module.exports = router