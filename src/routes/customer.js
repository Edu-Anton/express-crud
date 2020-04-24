const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

// Así se haría si se trabajara con el controlador directamente
// router.get('/', (req, res) => {
//   res.send('Hello world')
// });

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.destroy);

module.exports = router;