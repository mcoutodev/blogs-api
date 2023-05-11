"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("categories", {
            id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("categories");
    },
};
