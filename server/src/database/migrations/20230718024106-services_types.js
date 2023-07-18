module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('services_types', {
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

  down: (queryInterface) => queryInterface.dropTable('services_types'),
};
