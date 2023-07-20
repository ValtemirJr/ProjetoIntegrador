// Arquivo responsável pela criação da tabela tipos de agendamento no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('scheduling_status', {
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

  down: (queryInterface) => queryInterface.dropTable('scheduling_status'),
};
