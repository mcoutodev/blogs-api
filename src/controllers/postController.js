const { postService } = require('../services');

const store = async (req, res) => {
    const { id } = req.user;
    const { message } = await postService.store({ ...req.body, userId: id });
    res.status(201).json(message);
};

module.exports = {
    store,
};
