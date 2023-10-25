const axios = require('axios');
const { getAllCountries } = require('../services/servicesCountries');

const getCountries = async(req,res)=>{
    try {
        const resApi = await getAllCountries();
        return res.statu(200).send(resApi);
    } catch (error) {
        return error = {error:error.message};
    }
}

module.exports = getCountries;