module.exports = {
  // Cria a tabela de serviços no banco de dados com os campos abaixo
  up: (queryInterface, Sequelize) => queryInterface.createTable('service_type', {
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

  down: (queryInterface) => queryInterface.dropTable('service_type'),
};
