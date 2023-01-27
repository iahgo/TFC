const { DataTypes } = require("sequelize");+
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      home_team_id: {
        type: DataTypes.INTEGER,
      },
      home_team_goals: {
        type: DataTypes.INTEGER,
      },
      away_team_id: {
        type: DataTypes.INTEGER,
      },
      away_team_goals: {
        type: DataTypes.INTEGER,
      },
      in_progress: {
        type: DataTypes.BOOLEAN,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};