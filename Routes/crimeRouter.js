const express = require('express');
const router = express.Router();
const path = require('path');

var crime = require('../Controllers/crimeController');

router.post('/registerFir',crime.registerFir);
router.get("/getfirdetails",crime.getfirdetails);
router.post("/status",crime.status);
// router.post("/statusInProgress",crime.InProgress);
// router.post("/statusSolved",crime.Solved);

module.exports=router;