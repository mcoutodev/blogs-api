const router = require('express').Router();

const { userController } = require('../controllers');
const { validate } = require('../middlewares');

router.post('/', validate.user, userController.store);

module.exports = router;
