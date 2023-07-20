module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('client', {
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
    phonenumber: {
      allowNull: false,
      type: Sequelize.STRING(20),
    },
    cpf: {
      allowNull: true,
      type: Sequelize.STRING(11),
    },
    occupation: {
      allowNull: true,
      type: Sequelize.STRING(50),
    },
    marital_status: {
      allowNull: true,
      type: Sequelize.STRING(20),
    },
    literacy: {
      allowNull: true,
      type: Sequelize.STRING(255),
    },
    address: {
      allowNull: true,
      type: Sequelize.STRING(100),
    },
    date_birth: {
      allowNull: true,
      type: Sequelize.STRING(255),
    },
    nacionality_id: {
      type: Sequelize.INTEGER,
      references: { model: 'nacionality', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    },
    goal: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    date_request: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('client'),
};
