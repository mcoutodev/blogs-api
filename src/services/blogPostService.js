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

module.exports = {
    store,
};
