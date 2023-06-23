const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto, updateProyecto } = require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)
//actualizar 
router.put('/:id', updateProyecto)

// consultar todos
router.get('/', getTipoProyecto)

module.exports = router;