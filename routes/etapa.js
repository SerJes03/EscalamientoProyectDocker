const { Router } = require('express')
const { getEtapas, createEtapa, updateEtapa } = require('../controllers/etapas')

const router = Router()

// consultar todos
router.get('/', getEtapas);

// crear
router.post('/', createEtapa);

//update
router.put('/:id', updateEtapa);


module.exports = router;