'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: false,
                require: true
            },
            status: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: false,
                require: true
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users')
    }
}