const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const responseApi = require('./src/controllers/getInfoApi');
const PORT = 3001;


const startServer = async ()=>{
    try {
        await conn.sync({ force: true });
        console.log('Base de datos sincronizada.');
        server.listen(PORT, () => {
          console.log(`Servidor escuchando en el puerto ${PORT}`);
        });

        const apiData = responseApi.data?.map( async element => {
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
startServer();