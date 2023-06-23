const { Router } = require('express')
const { getUniversidades, createUniversidad, updateUniversidad  } = require('../controllers/universidad')

const router = Router()


// consultar todos
router.get('/', getUniversidades)

// crear
router.post('/', createUniversidad)

//actualizar 
router.put('/:id', updateUniversidad)


module.exports = router;