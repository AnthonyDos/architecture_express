const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const {authenticate} = require('../middlewares/AuthMiddleware'); 

router.post('/', userController.create);
router.post('/login', userController.login);

router.get('/:_id', authenticate, userController.profileUser);
router.get('/', authenticate, userController.allUsers);
router.put('/update/:_id', authenticate, userController.updateUser);
router.delete('/delete/:_id', authenticate, userController.deleteUser);

module.exports = router;