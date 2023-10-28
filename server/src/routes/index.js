const { Router } = require("express");
const getCountries = require('../controllers/get/getCountries.js');
const getCountryById = require('../controllers/get/getCountryById.js');
const getCountriesByName = require('../controllers/get/getCountriesByName.js');
const postActivity = require('../controllers/post/createActivity.js');

const router = Router();

// router.get("/countries", getCountries);
// router.get("/countries/name", getCountriesByName)
// router.get("/countries/:idPais", getCountryById);

router.post("/countries/activities", postActivity);


module.exports = router;
