const { Category } = require('../models');

const store = async ({ name }) => {
    const category = await Category.create({ name });
    return { type: null, message: category };
};

const findAll = async () => {
    const categories = await Category.findAll();
    return { type: null, message: categories };
};

module.exports = {
    store,
    findAll,
};
