import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

class TokenController {
  // Retorna um token de autenticação para o usuário
  // o body deve conter email e password
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Wrong credentials.'],
      });
    }

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist.'],
      });
    }

    // Verifica se a senha informada é válida
    if (!(await user.isPasswordValid(password))) {
      return res.status(401).json({
        errors: ['Wrong credentials.'],
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      },
    );

    return res.json({
      user,
      token,
    });
  }
}

export default new TokenController();
