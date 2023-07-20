module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bundle_service', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    service_id: {
      type: Sequelize.INTEGER,
      references: { model: 'service', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    bundle_id: {
      type: Sequelize.INTEGER,
      references: { model: 'bundle', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('bundle_service'),
};
