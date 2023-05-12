const {
    loginSchema,
    userSchema,
    categorySchema,
    newBlogPostSchema,
    updateBlogPostSchema,
} = require('./schemas');

const login = async (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }
    next();
};

const user = async (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

const category = async (req, res, next) => {
    const { error } = categorySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: '"name" is required' });
    }
    next();
};

const newBlogPost = async (req, res, next) => {
    const { error } = newBlogPostSchema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ message: 'Some required fields are missing' });
    }
    next();
};

const updateBlogPost = async (req, res, next) => {
    const { error } = updateBlogPostSchema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = {
    login,
    user,
    category,
    newBlogPost,
    updateBlogPost,
};
