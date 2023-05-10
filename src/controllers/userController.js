const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const store = async (req, res) => {
    const { type, message } = await userService.store(req.body);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(201).json({ token: message });
};

module.exports = {
    store,
};
