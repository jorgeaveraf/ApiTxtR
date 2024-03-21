const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to the API'));

router.post('/ines', controllers.registerIne);
router.get('/ines', controllers.getAllInes);

module.exports = router;