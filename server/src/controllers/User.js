import User from '../models/User';

class UserController {
  // Cria um novo usuário no banco de dados e retorna os dados do usuário criado
  // o body deve conter name, email e password
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.status(200).json({ id, name, email });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'User was not created' });
    }
  }
}

export default new UserController();
