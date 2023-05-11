const router = require('express').Router();

const { loginController } = require('../controllers');
const { validation } = require('../middlewares');

router.post('/', validation.login, loginController.login);

module.exports = router;
