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
              msg: 'Name cannot be empty',
            },
            isEmail: {
              msg: 'Invalid email',
            },
          },
        },
        // Campo que armazena a senha criptografada
        password_hash: {
          type: Sequelize.STRING(100),
          defaultValue: '',
        },
        user_type: {
          type: Sequelize.STRING(1),
          defaultValue: 'S',
          validate: {
            notEmpty: {
              msg: 'User type cannot be empty',
            },
            isIn: {
              args: [['S', 'T']],
              msg: 'User type must be S (Secretária) or T (Terapeuta)',
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
              msg: 'Password cannot be empty',
            },
            len: {
              args: [6, 50],
              msg: 'Password must have between 6 and 50 characters',
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
