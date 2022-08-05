'use strict';
module.exports = {
  async up(queryInterface, Sequelize) { 
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true 
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }

    await queryInterface.createTable('LeaderBoards', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LeaderBoards');
  }
};