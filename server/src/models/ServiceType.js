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
              msg: 'Descrição não pode ser vazia',
            },
            len: {
              args: [5, 255],
              msg: 'Descrição deve ter entre 5 e 255 caracteres',
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

  // Associação entre models
  // Um tipo de serviço pode ter vários serviços
  static associate(models) {
    this.hasMany(models.Service, { foreignKey: 'service_type_id' });
  }
}
