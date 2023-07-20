// Cria a tabela de contas a pagar no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bills', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    due_date: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    pay_date: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    bills_type_id: {
      type: Sequelize.INTEGER,
      references: { model: 'bills_type', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    method_payments_id: {
      type: Sequelize.INTEGER,
      references: { model: 'method_payments', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('bills'),
};
