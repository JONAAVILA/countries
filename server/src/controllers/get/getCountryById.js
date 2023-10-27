const allCountriesById = require('../../handlers/getHandlers/allCountriesById.js');

const getCountryById = async (req, res)=>{
    try {
        const {idPais} = req.params
        const listById = await allCountriesById(idPais.toUpperCase());
        res.status(200).json(listById);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getCountryById;