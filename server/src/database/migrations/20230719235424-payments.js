// Arquivo responsável pela criação da tabela de pagamentos no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('payments', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    scheduling_id: {
      type: Sequelize.INTEGER,
      references: { model: 'scheduling', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    method_payment_id: {
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
    pay_date: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('payments'),
};
