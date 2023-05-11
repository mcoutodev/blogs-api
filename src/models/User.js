module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            displayName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            image: {
                allowNull: true,
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "users",
            timestamps: false,
            underscored: true,
        }
    );

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            foreignKey: "userId",
            as: "blogPosts",
        });
    };

    return User;
};
