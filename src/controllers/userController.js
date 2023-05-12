const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const store = async (req, res) => {
    const { type, message } = await userService.store(req.body);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(201).json({ token: message });
};

const findAll = async (_req, res) => {
    const { message } = await userService.findAll();
    res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.findById(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(200).json(message);
};

const destroy = async (req, res) => {
    const { email } = req.user;
    await userService.destroy(email);
    return res.status(204).end();
};

module.exports = {
    store,
    findAll,
    findById,
    destroy,
};
