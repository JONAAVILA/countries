
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { startBdd } = require('./src/services/servicesCountries');
const PORT = 3001;


const startServer = async ()=>{
    await conn.sync({ force: true });
        console.log('Base de datos sincronizada.');
        server.listen(PORT, () => {
          console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
        startBdd();
}

startServer();