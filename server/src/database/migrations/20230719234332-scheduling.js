module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('scheduling', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    client_id: {
      type: Sequelize.INTEGER,
      references: { model: 'client', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    service_id: {
      type: Sequelize.INTEGER,
      references: { model: 'service', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    date_request: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    consultation_date: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    goal: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    status_id: {
      type: Sequelize.INTEGER,
      references: { model: 'scheduling_status', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('scheduling'),
};
