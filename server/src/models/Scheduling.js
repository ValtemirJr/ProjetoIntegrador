import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de serrvices no banco de dados
export default class Scheduling extends Model {
  static init(sequelize) {
    super.init(
      {
        date_request: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        consultation_date: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Consultation date cannot be empty',
            },
          },
        },
        goal: {
          type: Sequelize.STRING(255),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Goal cannot be empty',
            },
            len: {
              args: [5, 255],
              msg: 'Goal must have between 5 and 255 characters',
            },
          },
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: 'scheduling',
      },
    );

    return this;
  }
}
