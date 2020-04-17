const persona = require('../Controller/persona_controller');
const {} = require('express');
const router = Router();

router.use('/Persona',persona);

module.exports = persona
