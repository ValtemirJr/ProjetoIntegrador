module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bundle', {
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
    client_id: {
      type: Sequelize.INTEGER,
      references: { model: 'client', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
    number_of_sessions: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('bundle'),
};
