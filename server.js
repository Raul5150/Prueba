//Receta de cocina para crear
//un servidor web
//cargando framework para crear
//servodorews web
var express = require('express');
//Generando un Servidor web
var server = express();
//Configuracion de un servicio
//estatico de archivos
server.use(express.static('public'));
//Configurando server
const IP = process.env.IP || "0.0.0.0";
const PORT = process.env.PORT || 3000;
//poniendo a trabajar el server
server.listen(PORT,IP,(err)=>{
    if(err){
        console.log("> Error al iniciar server: " + err);
        throw err;
    }
    console.log("> Server escuchando en http://" +
    IP + ":" + PORT + "/...");
});


