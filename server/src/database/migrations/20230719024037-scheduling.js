module.exports = {
  // Cria a tabela de clientes no banco de dados com os campos abaixo
  up: (queryInterface, Sequelize) => queryInterface.createTable('scheduling', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Se o cliente for excluído, exclui também todos os agendamentos relacionados a ele
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
    status: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('scheduling'),
};
