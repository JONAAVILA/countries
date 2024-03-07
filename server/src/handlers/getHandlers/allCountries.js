const { Country, Activity } = require('../../db.js');

const allCountries = async()=>{
    try {
         const listCountries = await Country.findAll({
        include: [Activity]
    });
    return Promise.all(listCountries); 
    } catch (error) {
        
    }
  
}

module.exports = allCountries;