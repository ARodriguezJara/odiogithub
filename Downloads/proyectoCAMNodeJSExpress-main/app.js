const express = require('express');
const app = express();

//Raiz de la Aplicacion
app.get('/',(req,res)=>{
    res.redirect('/inicioCAM')
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//app.use(express(json));

app.use('/',require('./router'));

app.listen(5000, ()=>{
    console.log('El servidor esta corriendo en el puerto 5000');
    console.log('http://localhost:5000');
})