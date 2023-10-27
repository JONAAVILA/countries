const allCountriesByName = require('../../handlers/getHandlers/allCountriesByName.js');

const getCountriesByName = async (req, res)=>{
    try {
        const queryName = req.query.name.toLowerCase();
        const search = await allCountriesByName(queryName);

        if(!search || search.length === 0){
            throw new Error("No found Country")
        }
        return res.status(200).json(search);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getCountriesByName;