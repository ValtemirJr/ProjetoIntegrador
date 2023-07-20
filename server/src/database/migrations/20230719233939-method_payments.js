// Cria a tabela de métodos de pagamento no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('method_payments', {
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

  down: (queryInterface) => queryInterface.dropTable('method_payments'),
};
