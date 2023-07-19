module.exports = {
  // Cria a tabela de usuários no banco de dados com os campos abaixo
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(100),
      unique: true,
    },
    password_hash: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    user_type: {
      allowNull: false,
      type: Sequelize.STRING(1),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
