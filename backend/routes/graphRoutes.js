const express = require("express");
const router = express.Router();

const {
    addData,
    getData
} = require("../controller/Graphs/GraphController");

// /api/graphs

router.post("/addGraphData", addData);
router.get("/graphData", getData);

module.exports = router;