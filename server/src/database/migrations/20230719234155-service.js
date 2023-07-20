module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('service', {
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
    service_type_id: {
      type: Sequelize.INTEGER,
      references: { model: 'service_type', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('service'),
};
