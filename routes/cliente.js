const { Router } = require('express')
const {getClientes, createCliente, updateCliente  } = require('../controllers/cliente')

const router = Router()


// consultar todos
router.get('/', getClientes)

// crear
router.post('/', createCliente)

//actualizar 
router.put('/:id', updateCliente)


module.exports = router;