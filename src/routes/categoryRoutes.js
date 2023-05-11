const router = require('express').Router();

const { categoryController } = require('../controllers');
const { auth, validation } = require('../middlewares');

router.post('/', auth, validation.category, categoryController.store);
router.get('/', auth, categoryController.findAll);

module.exports = router;
