const { loginSchema } = require('./schemas');

const login = async (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }
    next();
};

module.exports = {
    login,
};
