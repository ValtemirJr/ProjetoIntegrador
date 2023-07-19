import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de serrvices no banco de dados
export default class ServiceType extends Model {
  static init(sequelize) {
    super.init(
      {
        description: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Description cannot be empty',
            },
            len: {
              args: [5, 255],
              msg: 'Description must have between 5 and 255 characters',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'service_type',
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Service, { foreignKey: 'service_type_id' });
  }
}
