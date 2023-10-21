const axios = require('axios');

const getInfoApi = async ()=>{
    try {
        const response = await axios.get('http://localhost:5000/countries');
        return response.data;

    } catch (error) {
        console.error('Error al obtener datos de la API de países:', error);
    }
    
}

module.exports = getInfoApi;