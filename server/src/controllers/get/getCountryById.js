const allCountriesById = require('../../handlers/getHandlers/allCountriesById.js');

const getCountryById = async (req, res)=>{
    try {
        const {id} = req.params
        const listById = await allCountriesById(id.toUpperCase());
        res.status(200).json(listById);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getCountryById;