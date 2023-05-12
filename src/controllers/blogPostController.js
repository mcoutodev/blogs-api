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

const findAll = async (_req, res) => {
    const { type, message } = await blogPostService.findAll();
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await blogPostService.findById(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(200).json(message);
};

const update = async (req, res) => {
    const { id } = req.params;
    const { email } = req.user;
    const { type, message } = await blogPostService.update({
        ...req.body,
        postId: id,
        email,
    });
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(200).json(message);
};

const destroy = async (req, res) => {
    const { email } = req.user;
    const { id } = req.params;
    const { type, message } = await blogPostService.destroy({ postId: id, email });
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    return res.status(204).end();
};

const findByQuery = async (req, res) => {
    const { q } = req.query;
    const { message } = await blogPostService.findByQuery(q);
    return res.status(200).json(message);
};

module.exports = {
    store,
    findAll,
    findById,
    update,
    destroy,
    findByQuery,
};
