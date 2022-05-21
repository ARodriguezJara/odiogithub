const conexion = require('../database/db');

//Fucion que registrara Cursos del CAM
exports.save = (req, res)=> {
    const nombre_curso = req.body.nombre_curso;
    const capacidad = req.body.capacidad;
    const dias_curso = req.body.dias_curso;
    const horario_entrada = req.body.horario_entrada;
    const horario_salida = req.body.horario_salida;
    //console.log(nombre_curso + " - " + capacidad_curso  + " - " + dias_curso  + " - " + horario_curso);
    conexion.query('INSERT INTO curso SET ?', {nombre_curso:nombre_curso, capacidad:capacidad, dias_curso:dias_curso, horario_entrada:horario_entrada, horario_salida:horario_salida}, (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    })
}

//Fucion para realizar Consultas Particulares de los Cursos del CAM
exports.consulta = (req, res)=> {
    const clave_curso = req.body.clave_curso;
    const nombre_curso = req.body.nombre_curso;
    const capacidad = req.body.capacidad;
    const dias_curso = req.body.dias_curso;
    const horario_entrada = req.body.horario_entrada;
    const horario_salida = req.body.horario_salida;
    conexion.query('UPDATE curso SET ? WHERE clave_curso = ?', [{nombre_curso:nombre_curso, capacidad:capacidad, dias_curso:dias_curso, horario_entrada:horario_entrada, horario_salida:horario_salida}, clave_curso], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    })
}

//Fucion que Modificara Cursos del CAM
exports.update = (req, res)=> {
    const clave_curso = req.body.clave_curso;
    const nombre_curso = req.body.nombre_curso;
    const capacidad = req.body.capacidad;
    const dias_curso = req.body.dias_curso;
    const horario_entrada = req.body.horario_entrada;
    const horario_salida = req.body.horario_salida;
    conexion.query('UPDATE curso SET ? WHERE clave_curso = ?', [{nombre_curso:nombre_curso, capacidad:capacidad, dias_curso:dias_curso, horario_entrada:horario_entrada, horario_salida:horario_salida}, clave_curso], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/cursos');
        }
    })
}

//Fucion que registrara Profesores del CAM
exports.saveProfesor = (req, res)=> {
    const nombre_profesor = req.body.nombre_profesor;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const correo_electronico = req.body.correo_electronico;
    const telefono = req.body.telefono;
    const cursos = req.body.cursos;
    conexion.query('INSERT INTO profesor SET ?', {nombre_profesor:nombre_profesor, apellido_paterno:apellido_paterno, apellido_materno:apellido_materno, correo_electronico:correo_electronico, telefono:telefono, cursos:cursos}, (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    })
}

//Fucion Consulta Particular Profesores del CAM
exports.consultaProfesor = (req, res)=> {
    const clave_profesor = req.body.clave_profesor;
    const nombre_profesor = req.body.nombre_profesor;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const correo_electronico = req.body.correo_electronico;
    const telefono = req.body.telefono;
    const cursos = req.body.cursos;
    conexion.query('UPDATE profesor SET ? WHERE clave_profesor = ?', [{nombre_profesor:nombre_profesor, apellido_paterno:apellido_paterno, apellido_materno:apellido_materno, correo_electronico:correo_electronico, telefono:telefono, cursos:cursos}, clave_profesor], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    })
}


//Fucion que Modificara Profesores del CAM
exports.updateProfesor = (req, res)=> {
    const clave_profesor = req.body.clave_profesor;
    const nombre_profesor = req.body.nombre_profesor;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const correo_electronico = req.body.correo_electronico;
    const telefono = req.body.telefono;
    const cursos = req.body.cursos;
    conexion.query('UPDATE profesor SET ? WHERE clave_profesor = ?', [{nombre_profesor:nombre_profesor, apellido_paterno:apellido_paterno, apellido_materno:apellido_materno, correo_electronico:correo_electronico, telefono:telefono, cursos:cursos}, clave_profesor], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/profesores');
        }
    })
}

//Fucion que registrara Alumnos del CAM
exports.saveAlumno = (req, res)=> {
    const nombre_alumno = req.body.nombre_alumno;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const edad_cumplida = req.body.edad_cumplida;
    const telefono = req.body.telefono;
    const calle = req.body.calle;
    const num_exterior = req.body.num_exterior;
    const colonia = req.body.colonia;
    const codigo_postal = req.body.codigo_postal;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const discapacidad = req.body.discapacidad;
    const enfermedades = req.body.enfermedades;
    const alergias = req.body.alergias;
    const servicio_medico = req.body.servicio_medico;
    const acta_nacimiento = req.body.acta_nacimiento;
    const fotografia = req.body.fotografia;
    const ine = req.body.ine;
    const comprobante_domicilio = req.body.comprobante_domicilio;
    const curp = req.body.curp;
    const cursos = req.body.cursos;
    conexion.query('INSERT INTO alumno SET ?', {nombre_alumno:nombre_alumno,
                                                apellido_paterno:apellido_paterno,
                                                apellido_materno:apellido_materno,
                                                fecha_nacimiento:fecha_nacimiento,
                                                edad_cumplida:edad_cumplida,
                                                telefono:telefono,
                                                calle:calle,
                                                num_exterior:num_exterior,
                                                colonia:colonia,
                                                codigo_postal:codigo_postal,
                                                ciudad:ciudad,
                                                estado:estado,
                                                discapacidad:discapacidad,
                                                enfermedades:enfermedades,
                                                alergias:alergias,
                                                servicio_medico:servicio_medico,
                                                acta_nacimiento:acta_nacimiento,
                                                fotografia:fotografia,
                                                ine:ine,
                                                comprobante_domicilio:comprobante_domicilio,
                                                curp:curp,
                                                cursos:cursos}, (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/alumnos');
        }
    })
}

//Fucion Consulta Particular Alumnos del CAM
exports.consultaAlumno = (req, res)=> {
    const matricula_alumno = req.body.matricula_alumno;
    const nombre_alumno = req.body.nombre_alumno;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const edad_cumplida = req.body.edad_cumplida;
    const telefono = req.body.telefono;
    const calle = req.body.calle;
    const num_exterior = req.body.num_exterior;
    const colonia = req.body.colonia;
    const codigo_postal = req.body.codigo_postal;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const discapacidad = req.body.discapacidad;
    const enfermedades = req.body.enfermedades;
    const alergias = req.body.alergias;
    const servicio_medico = req.body.servicio_medico;
    const acta_nacimiento = req.body.acta_nacimiento;
    const fotografia = req.body.fotografia;
    const ine = req.body.ine;
    const comprobante_domicilio = req.body.comprobante_domicilio;
    const curp = req.body.curp;
    const cursos = req.body.cursos;
    conexion.query('UPDATE alumno SET ? WHERE matricula_alumno = ?', [{nombre_alumno:nombre_alumno,
        apellido_paterno:apellido_paterno,
        apellido_materno:apellido_materno,
        fecha_nacimiento:fecha_nacimiento,
        edad_cumplida:edad_cumplida,
        telefono:telefono,
        calle:calle,
        num_exterior:num_exterior,
        colonia:colonia,
        codigo_postal:codigo_postal,
        ciudad:ciudad,
        estado:estado,
        discapacidad:discapacidad,
        enfermedades:enfermedades,
        alergias:alergias,
        servicio_medico:servicio_medico,
        acta_nacimiento:acta_nacimiento,
        fotografia:fotografia,
        ine:ine,
        comprobante_domicilio:comprobante_domicilio,
        curp:curp,
        cursos:cursos}, matricula_alumno], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/alumnos');
        }
    })
}

//Fucion Modificar Datos Alumnos del CAM
exports.updateAlumno = (req, res)=> {
    const matricula_alumno = req.body.matricula_alumno;
    const nombre_alumno = req.body.nombre_alumno;
    const apellido_paterno = req.body.apellido_paterno;
    const apellido_materno = req.body.apellido_materno;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const edad_cumplida = req.body.edad_cumplida;
    const telefono = req.body.telefono;
    const calle = req.body.calle;
    const num_exterior = req.body.num_exterior;
    const colonia = req.body.colonia;
    const codigo_postal = req.body.codigo_postal;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const discapacidad = req.body.discapacidad;
    const enfermedades = req.body.enfermedades;
    const alergias = req.body.alergias;
    const servicio_medico = req.body.servicio_medico;
    const acta_nacimiento = req.body.acta_nacimiento;
    const fotografia = req.body.fotografia;
    const ine = req.body.ine;
    const comprobante_domicilio = req.body.comprobante_domicilio;
    const curp = req.body.curp;
    const cursos = req.body.cursos;
    conexion.query('UPDATE alumno SET ? WHERE matricula_alumno = ?', [{nombre_alumno:nombre_alumno,
        apellido_paterno:apellido_paterno,
        apellido_materno:apellido_materno,
        fecha_nacimiento:fecha_nacimiento,
        edad_cumplida:edad_cumplida,
        telefono:telefono,
        calle:calle,
        num_exterior:num_exterior,
        colonia:colonia,
        codigo_postal:codigo_postal,
        ciudad:ciudad,
        estado:estado,
        discapacidad:discapacidad,
        enfermedades:enfermedades,
        alergias:alergias,
        servicio_medico:servicio_medico,
        acta_nacimiento:acta_nacimiento,
        fotografia:fotografia,
        ine:ine,
        comprobante_domicilio:comprobante_domicilio,
        curp:curp,
        cursos:cursos}, matricula_alumno], (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            res.redirect('/alumnos');
        }
    })
}