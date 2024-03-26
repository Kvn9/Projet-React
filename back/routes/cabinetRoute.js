const express = require('express');
const router = express.Router();
const cabinetRoute = require('../controllers/cabinetController');
const middleware = require('../middleware/middleware');


router.get('/getAllCabinet', cabinetRoute.getAllCabinet);
router.put('/uptadeCabinet/:id', cabinetRoute.updateCabinet);
router.delete('/deleteCabinet/:id', cabinetRoute.deleteCabinet);
router.get('/getCabinetID/:id', cabinetRoute.getCabinetID);
router.post('/insertCabinet', cabinetRoute.insertCabinet);

module.exports = router;