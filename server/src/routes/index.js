const { Router } = require("express");
const getCountries = require('../controllers/get/getCountries.js');
const getCountryById = require('../controllers/get/getCountryById.js');

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);

module.exports = router;
