import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// Model que representa a tabela de usuários no banco de dados
export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
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
            msg: 'E-mail ja existe',
          },
          validate: {
            notEmpty: {
              msg: 'Nome não pode ser vazio',
            },
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        // Campo que armazena a senha criptografada
        password_hash: {
          type: Sequelize.STRING(100),
          defaultValue: '',
        },
        // Campo que armazena o tipo de usuário
        // S = Secretária
        // T = Terapeuta
        user_type: {
          type: Sequelize.STRING(1),
          defaultValue: 'S',
          validate: {
            notEmpty: {
              msg: 'Usuário não pode ser vazio'
            },
            isIn: {
              args: [['S', 'T']],
              msg: 'Usuário deve ser S (Secretária) ou T (Terapeuta)'
            },
          },
        },
        // Campo virtual que não existe no banco de dados
        // Serve apenas para receber a senha do usuário antes de criptografá-la
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Senha não pode ser vazia',
            },
            len: {
              args: [6, 50],
              msg: 'Senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    // Hook que é executado antes de salvar o usuário no banco de dados
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // Criptografa a senha do usuário com bcryptjs e salva no campo password_hash caso exista
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });

    return this;
  }

  // Verifica se a senha passada é válida
  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
