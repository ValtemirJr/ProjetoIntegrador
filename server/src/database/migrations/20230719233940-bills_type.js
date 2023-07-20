// Cria a tabela de tipos de contas a pagar no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bills_type', {
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

  down: (queryInterface) => queryInterface.dropTable('bills_type'),
};
