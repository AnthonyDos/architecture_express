const express = require('express');
const router = express.Router();
const pkmController = require('../controllers/PkmController');
const {authenticate} = require('../middlewares/AuthMiddleware');

router.post('/', authenticate, pkmController.create);
router.get('/', authenticate, pkmController.findAll);
router.get('/:_id', authenticate, pkmController.findById);
router.put('/update/:_id', authenticate, pkmController.updateById);
router.delete('/delete/:_id', authenticate, pkmController.deleteById);

module.exports = router;