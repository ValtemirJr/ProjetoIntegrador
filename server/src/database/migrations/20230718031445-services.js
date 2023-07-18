module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('services', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING(255),
      unique: true,
    },
    services_types_id: {
      type: Sequelize.INTEGER,
      references: { model: 'services_types', key: 'id' },
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('services'),
};
