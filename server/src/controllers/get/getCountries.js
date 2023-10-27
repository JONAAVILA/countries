const allCountries = require('../../handlers/getHandlers/allCountries.js');

const getCountries =  async (req,res)=>{
    try {
        const countriList = await allCountries();
        res.status(200).json(countriList);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getCountries;