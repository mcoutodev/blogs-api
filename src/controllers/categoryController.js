const { categoryService } = require('../services');

const store = async (req, res) => {
    const { message } = await categoryService.store(req.body);
    res.status(201).json(message);
};

const findAll = async (_req, res) => {
    const { message } = await categoryService.findAll();
    res.status(200).json(message);
};

module.exports = {
    store,
    findAll,
};
