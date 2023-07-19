import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de clientes no banco de dados
export default class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Name cannot be empty',
            },
            len: {
              args: [3, 100],
              msg: 'Name must have between 3 and 100 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          unique: {
            msg: 'Email already exists',
          },
          validate: {
            notEmpty: {
              msg: 'Email cannot be empty',
            },
            isEmail: {
              msg: 'Invalid Email',
            },
          },
        },
        phonenumber: {
          type: Sequelize.STRING(20),
          defaultValue: '',
          unique: {
            msg: 'Phonenumber already exists',
          },
          validate: {
            notEmpty: {
              msg: 'Phonenumber cannot be empty',
            },
          },
        },
        cpf: {
          type: Sequelize.STRING(11),
          defaultValue: '',
        },
        occupation: {
          type: Sequelize.STRING(50),
          defaultValue: '',
        },
        marital_status: {
          type: Sequelize.STRING(20),
          defaultValue: '',
        },
        literacy: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        address: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        date_birth: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        nacionality: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        goal: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
        date_request: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: 'client',
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Scheduling, { foreignKey: 'client_id' });
  }
}
