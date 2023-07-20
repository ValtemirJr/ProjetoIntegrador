// Cria a tabela de anamneses no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('anamnese', {
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
    client_id: {
      type: Sequelize.INTEGER,
      references: { model: 'client', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    type: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    psychiatric_examination: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    disease_history: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    observation: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('anamnese'),
};
