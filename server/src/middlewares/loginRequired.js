import jwt from 'jsonwebtoken';
import User from '../models/User';

// Middleware que verifica se o usuário está logado
export default async (req, res, next) => {
  const { authorization } = req.headers;

  // Verifica se o token foi enviado
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // Separa o token do Bearer
  const [, token] = authorization.split(' ');

  // Verifica se o token é válido
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { id, email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Invalid user, please login again'],
      });
    }
    // Define o id e o email do usuário na requisição
    req.userId = id;
    req.userEmail = email;
    return next();
  // Caso o token seja inválido ou tenha expirado retorna um erro
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expired or invalid'],
    });
  }
};
