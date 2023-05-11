module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "categories",
            timestamps: false,
            underscored: true,
        }
    );

    return Category;
};
