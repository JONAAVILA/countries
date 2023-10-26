const { Country } = require('../db.js');

const allCountriesById = async (id)=>{
    const listCountriesById = await Country.findByPk(id);
    return listCountriesById;
}

module.exports = allCountriesById;