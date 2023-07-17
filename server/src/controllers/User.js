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

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ errors: ['ID not provided'] });
    }
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ errors: ['User not found'] });
    }
    await user.destroy();
    return res.json({
      deleted: true,
      message: 'User deleted',
    });
  }

  catch(error) {
    // eslint-disable-next-line no-undef
    return res.status(400).json({
      deleted: false,
      errors: error.errors.map((err) => err.message),
    });
  }
}

export default new UserController();
