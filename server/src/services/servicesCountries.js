const axios = require("axios");
const { Country } = require('../db.js');



const startBdd = async ()=>{
    try {
        const api = await axios('http://localhost:5000/countries')
        const apiData = api.data?.map( async element => {
            await Country.findOrCreate({
                where:{
                    id: element.cca3,
                    name: element.name['common'],
                    flag: element.flag,
                    continents: element.continents[0],
                    capital: element.capital !== undefined ? element.capital[0] : 'No esta definido Capital',
                    subRegion: element.subRegion !== undefined ? element.subRegion : 'No esta definido Subregion',
                    area: element.area,
                    population: element.population,
                },
                row: false
            })
            await Promise.all(apiData)
            return apiData
        })


    } catch (error) {
      console.error('Error al poblar la base de datos o iniciar el servidor:', error);
    }
}

module.exports = startBdd;