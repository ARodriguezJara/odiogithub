const mysql = require('mysql');

const conexion = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bdproyectocam',
    multipleStatements: true
})
conexion.connect((error)=>{
    if(error){
        console.error('Error de Conexion: ' + error);
        return
    }
    console.log('Conectado a la Base de datos bdproyectocam')
})

module.exports = conexion;