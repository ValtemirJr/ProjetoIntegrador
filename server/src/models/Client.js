import Sequelize, { Model } from 'sequelize';

// Model que representa a tabela de clientes no banco de dados
export default class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        // Atributos obrigatórios
        name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Nome não pode ser vazio',
            },
            len: {
              args: [3, 100],
              msg: 'Nome deve ter entre 3 e 100 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe',
          },
          validate: {
            notEmpty: {
              msg: 'E-mail não pode ser vazio',
            },
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        phonenumber: {
          type: Sequelize.STRING(20),
          defaultValue: '',
          unique: {
            msg: 'Telefone já existe',
          },
          validate: {
            notEmpty: {
              msg: 'Telefone não pode ser vazio',
            },
          },
        },
        // Atributos opcionais
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

  // Associação entre tabelas
  // Um cliente pode ter vários agendamentos
  static associate(models) {
    this.hasMany(models.Scheduling, { foreignKey: 'client_id' });
  }
}
