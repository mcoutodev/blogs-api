const router = require('express').Router();

const { userController } = require('../controllers');
const { validation, auth } = require('../middlewares');

router.post('/', validation.user, userController.store);

router.get('/', auth, userController.findAll);

router.get('/:id', auth, userController.findById);

router.delete('/me', auth, userController.destroy);

module.exports = router;
