const { blogPostService } = require('../services');
const errorMap = require('../utils/errorMap');

const store = async (req, res) => {
    const { email } = req.user;
    const { type, message } = await blogPostService.store({
        ...req.body,
        email,
    });
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(201).json(message);
};

module.exports = {
    store,
};
