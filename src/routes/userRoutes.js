const router = require('express').Router();

const { userController } = require('../controllers');
const { validation, auth } = require('../middlewares');

router.post('/', validation.user, userController.store);
router.get('/', auth, userController.findAll);

module.exports = router;
