const { Op } = require('sequelize');

const {
    BlogPost,
    PostCategory,
    Category,
    User,
    sequelize,
} = require('../models');

const hasAllCategories = async (categoryIds) => {
    const { count } = await Category.findAndCountAll({
        where: { id: { [Op.in]: categoryIds } },
    });
    return count === categoryIds.length;
};

const commitPost = async ({ title, content, userId, categoryIds }) =>
    sequelize.transaction(async (transaction) => {
        const blogPost = await BlogPost.create(
            {
                title,
                content,
                userId,
                published: new Date(),
                updated: new Date(),
            },
            { transaction },
        );
        await PostCategory.bulkCreate(
            categoryIds.map((categoryId) => ({ postId: blogPost.id, categoryId })),
            { transaction },
        );
        return blogPost;
    });

const store = async ({ title, content, email, categoryIds }) => {
    if (!(await hasAllCategories(categoryIds))) {
        return {
            type: 'BAD_REQUEST',
            message: 'one or more "categoryIds" not found',
        };
    }
    const userId = await User.findOne({ where: { email } }).then(
        (user) => user.id,
    );
    const result = await commitPost({ title, content, userId, categoryIds });
    return { type: null, message: result };
};

const findAll = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return { type: null, message: blogPosts };
};

const findById = async (postId) => {
    const blogPost = await BlogPost.findByPk(postId, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!blogPost) {
        return { type: 'NOT_FOUND', message: 'Post does not exist' };
    }
    return { type: null, message: blogPost };
};

module.exports = {
    store,
    findAll,
    findById,
};
