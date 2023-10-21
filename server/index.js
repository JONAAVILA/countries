const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const getInfoApi = require("./src/controllers/getInfoApi");
const PORT = 3001;


// conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
//   })
// }).catch(error => console.error(error))


const startServer = async ()=>{
    try {
        await conn.sync({ force: true });
        console.log('Base de datos sincronizada.');
        server.listen(PORT, () => {
          console.log(`Servidor escuchando en el puerto ${PORT}`);
        });

        const countriesData = await getInfoApi();

        countriesData.map(paises=>{
            const pais = Country.create({
              id: paises.cca3,
              name: paises.name['common'],
              flags: paises.flags[0],
              continents: paises.continents[0],
              capital: paises.capital !== undefined ? paises.capital[0] : 'No esta definido Capital',
              subregion: paises.subregion !== undefined ? paises.subregion : 'No esta definido Subregion',
              area: paises.area,
              population: paises.population,
            })
        })


    } catch (error) {
      console.error('Error al poblar la base de datos o iniciar el servidor:', error);
    }
}
startServer();