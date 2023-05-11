const { BlogPost, PostCategory, sequelize } = require('../models');

const store = async ({ title, content, userId, categoryIds }) => {
    const result = sequelize.transaction(async (transaction) => {
        const post = await BlogPost.create({
            title,
            content,
            userId,
            published: new Date(),
            updated: new Date(),
        }, { transaction });
        await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
            postId: post.id,
            categoryId,
        })), { transaction });
        return post;
    });
    return { type: null, message: result };
};

module.exports = {
    store,
};
