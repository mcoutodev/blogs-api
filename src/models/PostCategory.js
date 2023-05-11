module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        "PostCategory",
        {
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "BlogPost",
                    key: "id",
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "Category",
                    key: "id",
                },
            },
        },
        {
            tableName: "posts_categories",
            timestamps: false,
            underscored: true,
        }
    );

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: "postId",
            as: "blogPosts",
            through: PostCategory,
            otherKey: "categoryId",
        });
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: "categoryId",
            as: "categories",
            through: PostCategory,
            otherKey: "postId",
        });
    };

    return PostCategory;
};
