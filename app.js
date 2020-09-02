const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripción de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

/*console.log(argv.direccion);


lugar.getLugLatLong(argv.direccion).then(console.log);




clima.getClima(-34.60983, -58.45228).then(console.log)
    .catch(console.log);*/





const getInfo = async(direccion) => {

    try {

        const datosCiudad = await lugar.getLugLatLong(direccion);

        let ciudad = datosCiudad.dir;
        let latitud = datosCiudad.lat;
        let longitud = datosCiudad.longt;


        const temperatura = await clima.getClima(latitud, longitud);


        return (`La temperatura de la ciudad de ${ciudad} es de ${temperatura}`);
    } catch (err) {
        return (`No se pudo obtener la temperatura de: ${direccion}.......${err}`);
    }


}


getInfo(argv.direccion).then(console.log)
    .catch(console.log);