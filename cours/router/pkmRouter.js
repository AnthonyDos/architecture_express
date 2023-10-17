const express = require('express');
const router = express.Router();
const pkmController = require('../controllers/PkmController');
const authenticate = require('../controllers/UserController').authenticate;

router.post('/', pkmController.create);
router.get('/', authenticate, pkmController.findAll);
router.get('/:_id', pkmController.findById);
router.put('/update/:_id', pkmController.updateById);
router.delete('/delete/:_id', pkmController.deleteById);

module.exports = router;