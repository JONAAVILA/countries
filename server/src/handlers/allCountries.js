const { Country } = require('../db.js');

const allCountries = async()=>{
    const listCountries = await Country.findAll();
    return listCountries;
}

module.exports = allCountries;