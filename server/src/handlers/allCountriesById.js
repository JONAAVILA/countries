const { Country, Activity } = require('../db.js');

const allCountriesById = async (id)=>{
    const listCountriesById = await Country.findOne({
        where:{
            id: id
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