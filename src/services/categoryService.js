const { Category } = require('../models');

const store = async ({ name }) => {
    const category = await Category.create({ name });
    return { type: null, message: category };
};

module.exports = {
    store,
};
