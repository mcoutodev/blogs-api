const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
    const token = jwt.sign({ email }, JWT_SECRET);
    return { type: null, message: token };
};

module.exports = {
    login,
};
