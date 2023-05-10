const { loginSchema, userSchema } = require('./schemas');

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

module.exports = {
    login,
    user,
};
