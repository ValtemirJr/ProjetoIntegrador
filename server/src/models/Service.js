import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de serrvices no banco de dados
export default class Service extends Model {
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
        price: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Price cannot be zero or less',
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
}
