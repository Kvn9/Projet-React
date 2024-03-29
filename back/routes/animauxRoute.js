const express = require('express');
const router = express.Router();
const animauxRoute = require('../controllers/animauxController');
const middleware = require('../middleware/middleware');

router.get('/getAllAnimaux',  animauxRoute.getAllAnimaux);
router.put('/updateAnimaux/:id', animauxRoute.updateAnimaux);
router.delete('/deleteAnimaux/:id', animauxRoute.deleteAnimaux);
router.get('/getAnimauxID/:id', animauxRoute.getAnimauxID);
router.post('/insertAnimaux', animauxRoute.insertAnimaux);


module.exports = router;