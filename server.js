const express = require('express')
const app = express() // declara constante app de la función de express

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname+'/public'))


hbs.registerPartials(__dirname+'/views/partials');
//Express HBS engine
app.set('view engine','hbs');

const port = process.env.PORT || 3000;

//ROUTES
//configuramos una solicitud tipo GET 
app.get('/', function (req, res) {
    res.render('home',{
        page: 'Home',
        name: 'David Botero'
    })
})
app.get('/home', function (req, res) {
    res.render('home',{
        page: 'Home',
        name: 'DAVID BOTERO'
    })
})
app.get('/about', function (req, res) {
    res.render('about',{
        page: 'About',
        name: 'david botero'
    })
})

app.listen(port,()=>{
    console.log('Escuchando peticiones en el puerto ' + port)
})