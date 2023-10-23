const axios = require("axios");

const responseApi = async ()=>{
    return await axios('http://localhost:5000/countries');
}

module.exports = responseApi;