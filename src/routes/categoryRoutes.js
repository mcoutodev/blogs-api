const router = require('express').Router();

const { categoryController } = require('../controllers');
const { auth, validation } = require('../middlewares');

router.post('/', auth, validation.category, categoryController.store);

module.exports = router;
