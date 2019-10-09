const express = require('express');
const router = express.Router();
const path = require('path');

var crime = require('../Controllers/crimeController');

router.post('/registerFir',crime.registerFir);

module.exports=router;