const router = require('express').Router();

const { blogPostController } = require('../controllers');
const { auth, validation } = require('../middlewares');

router.post('/', auth, validation.newBlogPost, blogPostController.store);

router.get('/', auth, blogPostController.findAll);

router.get('/:id', auth, blogPostController.findById);

router.put('/:id', auth, validation.updateBlogPost, blogPostController.update);

router.delete('/:id', auth, blogPostController.destroy);

module.exports = router;
