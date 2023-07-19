import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de services no banco de dados
export default class Service extends Model {
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
        price: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Preço não pode ser vazio',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'service',

      },
    );

    return this;
  }

  // Associação entre models
  // Um serviço pode ter vários agendamentos
  static associate(models) {
    this.hasMany(models.Scheduling, { foreignKey: 'service_id' });
  }
}
