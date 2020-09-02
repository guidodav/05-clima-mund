const axios = require('axios');

const getLugLatLong = async(direccion) => {

    const encodeUlr = encodeURI(direccion);




    const instance = axios.create({
        baseURL: `https://geocode.xyz?locate="${encodeUlr}"&auth=270304373376186438590x127524&json=1`
            /*,
            timeout: 1000,
            headers: { 'X-Custom-Header': 'foobar' }*/
    });


    const resp = await instance.get();



    /* if (resp.data.Results.length === 0) {

        throw new Error('No hay respuesta para: ' + direccion);
    }*/

    const data = resp.data;
    const dir = data.standard.city;
    const lat = data.latt;
    const longt = data.longt;



    return { dir, lat, longt }

}



module.exports = {
    getLugLatLong
}