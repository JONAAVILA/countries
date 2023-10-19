const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

const countries = async ()=> {
  try{

    const api = await axios('http://localhost:  /countries') //llamo al endpont  de la api 
    const apiData = api.data?.map( async element => {
        await Country.findOrCreate({ //await, porque no se sabe cuento tarda a la respuesta entonces tengo que avisar
            where:{
                id: element.cca3,
                name: element.name['common'],
                flags: element.flags[0],
                continents: element.continents[0],
                capital: element.capital !== undefined ? element.capital[0] : 'No esta definido Capital',
                subregion: element.subregion !== undefined ? element.subregion : 'No esta definido Subregion',
                area: element.area,
                population: element.population,
            },
            row: false
        })
        await Promise.all(apiData)
        return apiData
    })
} catch(error){
    console.log(error)
}
}



// conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))
