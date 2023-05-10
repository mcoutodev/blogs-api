const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const store = async ({
    displayName,
    email,
    password,
    image = '',
}) => {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return { type: 'CONFLICT', message: 'User already registered' };
    }
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, JWT_SECRET);
    return { type: null, message: token };
};

module.exports = {
    store,
};
