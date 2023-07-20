import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de serrvices no banco de dados
export default class Nacionality extends Model {
  static init(sequelize) {
    super.init(
      {
        description: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: 'nacionality',
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Client, { foreignKey: 'nacionality_id' });
  }
}
