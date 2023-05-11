const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const store = async ({ displayName, email, password, image = '' }) => {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return { type: 'CONFLICT', message: 'User already registered' };
    }
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, JWT_SECRET);
    return { type: null, message: token };
};

const findAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { type: null, message: users };
};

const findById = async (userId) => {
    const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
    });
    if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };
    return { type: null, message: user };
};

module.exports = {
    store,
    findAll,
    findById,
};
