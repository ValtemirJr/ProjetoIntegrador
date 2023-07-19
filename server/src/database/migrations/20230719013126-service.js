module.exports = {
  // Cria a tabela de tipos de serviço no banco de dados com os campos abaixo
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
    // Se o tipo de serviço for excluído, exclui também todos os serviços relacionados a ele
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
