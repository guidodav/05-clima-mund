const axios = require('axios');


const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&APPID=54ab276dee379aca012e49938ee8c613&units=metric`);
    return (resp.data.main.temp);
}



module.exports = {

    getClima
}