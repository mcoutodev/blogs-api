const router = require('express').Router();

const { blogPostController } = require('../controllers');
const { auth, validation } = require('../middlewares');

router.post('/', auth, validation.blogPost, blogPostController.store);
router.get('/', auth, blogPostController.findAll);

module.exports = router;
