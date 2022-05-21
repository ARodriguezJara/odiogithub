const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

//Ruta para la pagina principal
router.get('/inicioCAM', (req, res)=>{
    res.render('inicioCAM');
})

//Ruta que muestra TODOS los Cursos desde la Base de Datos
router.get('/cursos', (req,res)=> {
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('index', {results:results});
        }
        })
})

//Ruta para Crear Cursos
router.get('/registrarCurso', (req, res)=>{
    res.render('create');
})

//Ruta para Consulta de forma Particular los Cursos del CAM
router.get('/consultaCurso/:clave_curso', (req, res)=>{
    const clave_curso = req.params.clave_curso;
    conexion.query('SELECT * FROM curso WHERE clave_curso=?', [clave_curso], (error,results)=>{
        if(error){
            throw error;
        } else {
            res.render('consulta', {nombre_curso:results[0], capacidad:results[0], dias_curso:results[0], horario_entrada:results[0], horario_salida:results[0]});
        }   
    })
});

//Ruta para Modificar Cursos
router.get('/editarCurso/:clave_curso', (req, res)=>{
    const clave_curso = req.params.clave_curso;
    conexion.query('SELECT * FROM curso WHERE clave_curso=?', [clave_curso], (error,results)=>{
        if(error){
            throw error;
        } else {
            res.render('edit', {nombre_curso:results[0], capacidad:results[0], dias_curso:results[0], horario_entrada:results[0], horario_salida:results[0]});
        }   
    })
});

//Ruta para Eliminar Cursos
router.get('/eliminarCurso/:clave_curso', (req,res)=>{
    const clave_curso = req.params.clave_curso;
    conexion.query('DELETE FROM curso WHERE clave_curso=?', [clave_curso], (error,results)=>{
        if(error){
            throw error;
        } else {
            res.redirect('/cursos')
        }
    })
})

//Ruta para Mostrar TODOS los Cursos dentro del Registro de Profesores
router.get('/registrarProfesor', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('createProfesor', {curso:results});
        }
        })
})

//Ruta para Mostrar TODOS los Cursos dentro de la Edicion de Profesores
router.get('/editarProfesor', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('editProfesor', {curso:results});
        }
        })
})

//Ruta para Mostrar TODOS los Cursos dentro del Registro de Alumnos
router.get('/registrarAlumno', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('createAlumno', {curso:results});
        }
        })
})

//Ruta para Mostrar TODOS los Cursos dentro de la Edicion de Alumnos
router.get('/editarAlumno', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('editAlumno', {curso:results});
        }
        })
})

//Ruta que muestra a TODOS los Profesores desde la Base de Datos
router.get('/profesores', (req,res)=> {
    conexion.query('SELECT * FROM profesor', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('indexProfesor', {results:results});
        }
        })
})

//Ruta para Crear Profesores
router.get('/registrarProfesor', (req, res)=>{
    res.render('createProfesor');
})

//Ruta para Consultar de forma Particular Cursos
router.get('/consultaProfesor/:clave_profesor', (req, res)=>{
    const clave_profesor = req.params.clave_profesor;
    conexion.query('SELECT * FROM profesor WHERE clave_profesor=?', [clave_profesor], (error,results)=>{
        if(error) {
            throw error;
        } else {
            res.render('consultaProfesor', {nombre_profesor:results[0], apellido_paterno:results[0], apellido_materno:results[0], correo_electronico:results[0], telefono:results[0]});
        }   
    })
});

//Ruta para Modificar profesores
//Se hace uso de 2 querys para la obtencion de, el profesor encontrado, y de los cursos de la base de datos
//el primer query nos trae la informacion del profesor deseado a modificar
//el segundo query nos trae todos los cursos del sistema, para ofrecer un cambio de curso al profesor 
router.get('/editarprofesor/:clave_profesor', function (req,res,next){
    const clave_profesor = req.params.clave_profesor;
    conexion.query('SELECT * FROM profesor WHERE clave_profesor=?', [clave_profesor], (error,results)=>{
        if(error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM curso', (error,result)=>{
                if(error) {
                    throw error;
                } else {
                    res.render('editProfesor', 
                    {nombre_profesor:results[0], apellido_paterno:results[0], apellido_materno:results[0], correo_electronico:results[0], telefono:results[0],
                        cursos:results[0],curso:result});
                }   
            })
        }   
    })
});

//Ruta para Eliminar Profesores
router.get('/eliminarProfesor/:clave_profesor', (req,res)=>{
    const clave_profesor = req.params.clave_profesor;
    conexion.query('DELETE FROM profesor WHERE clave_profesor=?', [clave_profesor], (error,results)=>{
        if(error){
            throw error;
        } else {
            res.redirect('/profesores')
        }
    })
})

//Ruta que muestra a TODOS los Alumnos del CAM desde la Base de Datos
router.get('/alumnos', (req,res)=> {
    conexion.query('SELECT * FROM alumno', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('indexAlumno', {results:results});
        }
        })
})



//Ruta para Consultar de forma Particular de Alumnos
router.get('/consultaAlumno/:matricula_alumno', (req, res)=>{
    const matricula_alumno = req.params.matricula_alumno;
    conexion.query('SELECT * FROM alumno WHERE matricula_alumno=?', [matricula_alumno], (error,results)=>{
        if(error) {
            throw error;
        } else {
            res.render('consultaAlumno', {nombre_alumno:results[0], apellido_paterno:results[0], apellido_materno:results[0], fecha_nacimiento:results[0], edad_cumplida:results[0], telefono:results[0], calle:results[0], num_exterior:results[0], colonia:results[0], codigo_postal:results[0], ciudad:results[0], estado:results[0], discapacidad:results[0], enfermedades:results[0], alergias:results[0], servicio_medico:results[0], acta_nacimiento:results[0], fotografia:results[0], ine:results[0], comprobante_domicilio:results[0], curp:results[0], cursos:results[0]});
        }   
    })
});

//Ruta para Modificar Datos de Alumnos del CAM

//Ruta para Modificar profesores
//Se hace uso de 2 querys para la obtencion de, el profesor encontrado, y de los cursos de la base de datos
//el primer query nos trae la informacion del profesor deseado a modificar
//el segundo query nos trae todos los cursos del sistema, para ofrecer un cambio de curso al profesor 
router.get('/editarAlumno/:matricula_alumno', function (req,res,next){
    const matricula_alumno = req.params.matricula_alumno;
    conexion.query('SELECT * FROM alumno WHERE matricula_alumno=?', [matricula_alumno], (error,results)=>{
        if(error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM curso', (error,result)=>{
                if(error) {
                    throw error;
                } else {
                    res.render('editAlumno', {nombre_alumno:results[0], apellido_paterno:results[0], 
                        apellido_materno:results[0], fecha_nacimiento:results[0], 
                        edad_cumplida:results[0], telefono:results[0], calle:results[0], 
                        num_exterior:results[0], colonia:results[0], codigo_postal:results[0], 
                        ciudad:results[0], estado:results[0], discapacidad:results[0], 
                        enfermedades:results[0], alergias:results[0], servicio_medico:results[0], 
                        acta_nacimiento:results[0], fotografia:results[0], ine:results[0], 
                        comprobante_domicilio:results[0], curp:results[0], cursos:results[0],
                        curso:result});

                }   
            })
        }   
    })
});

//Ruta para Eliminar Alumnos del CAM
router.get('/eliminarAlumno/:matricula_alumno', (req,res)=>{
    const matricula_alumno = req.params.matricula_alumno;
    conexion.query('DELETE FROM alumno WHERE matricula_alumno=?', [matricula_alumno], (error,results)=>{
        if(error){
            throw error;
        } else {
            res.redirect('/alumnos')
        }
    })
})

const crud = require('./controllers/crud');
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');

router.post('/save', crud.save);
router.post('/consulta', crud.consulta);
router.post('/update', crud.update);

router.post('/saveProfesor', crud.saveProfesor);
router.post('/consultaProfesor', crud.consultaProfesor);
router.post('/updateProfesor', crud.updateProfesor);

router.post('/saveAlumno', crud.saveAlumno);
router.post('/consultaAlumno', crud.consultaAlumno);
router.post('/updateAlumno', crud.updateAlumno);

module.exports = router;