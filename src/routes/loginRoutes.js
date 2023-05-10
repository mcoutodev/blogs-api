const router = require('express').Router();

const { loginController } = require('../controllers');
const { validate } = require('../middlewares');

router.post('/', validate.login, loginController.login);

module.exports = router;
