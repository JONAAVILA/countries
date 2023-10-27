const { Country, Activity } = require('../../db.js');

const allCountriesById = async (idPais)=>{
    const listCountriesById = await Country.findOne({
        where:{
            id: idPais
        },
        include: {
               model: Activity,
               attributes: ["name", "difficulty", "duration", "season"],
               through: {
                   attributes: [],
               }
           },
    });
    return listCountriesById;
}

module.exports = allCountriesById;