const persona = require('../Controller/persona_controller');
const {Router} = require('express');
const router = Router();

router.use('/Persona',persona);

module.exports = router
