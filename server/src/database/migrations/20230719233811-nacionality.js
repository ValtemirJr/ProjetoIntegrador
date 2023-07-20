module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('nacionality', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('nacionality'),
};
