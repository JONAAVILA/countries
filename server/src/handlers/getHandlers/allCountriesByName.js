const { Country } = require('../../db.js');

const allCountriesByName = async (queryName)=>{
    
    const countries = await Country.findAll()
           
    const matchingCountries = countries.filter(country => 
        country.name.toLowerCase().includes(queryName));
        
    if (matchingCountries.length > 0) {
        return matchingCountries;
    }
} 

module.exports = allCountriesByName;