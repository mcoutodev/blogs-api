const { categoryService } = require('../services');

const store = async (req, res) => {
    const { message } = await categoryService.store(req.body);
    res.status(201).json(message);
};

module.exports = {
    store,
};
