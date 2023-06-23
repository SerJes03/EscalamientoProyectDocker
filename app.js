const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto');
const cliente = require('./routes/cliente');
const universidad = require('./routes/universidad');
const etapa = require('./routes/etapa');


app.use('/api/tiposproyectos', tipoProyecto);
app.use('/api/cliente', cliente);
app.use('/api/universidad', universidad);
app.use('/api/etapa', etapa);


module.exports = app