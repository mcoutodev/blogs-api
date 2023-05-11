module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
        "BlogPost",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: "User",
                    key: "id",
                },
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            published: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "blog_posts",
            timestamps: false,
            underscored: true,
        }
    );

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    };

    return BlogPost;
};
