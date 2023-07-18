import Client from '../models/Client';

class ClientController {
  // Cria um novo usuário no banco de dados e retorna os dados do usuário criado
  // o body deve conter name, email e password
  async create(req, res) {
    try {
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000).toUTCString();
      req.body.date_request = date;
      const client = await Client.create(req.body);
      const {
        id, name, email, phonenumber, goal, date_request,
      } = client;
      return res.status(200).json({
        id,
        name,
        email,
        phonenumber,
        goal,
        date_request,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Client was not created' });
    }
  }

  async delete(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) {
        return res.status(400).json({
          errors: ['Client not found'],
        });
      }
      await client.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'Client deleted',
      });
    } catch (error) {
      if (error.errors) {
        return res.status(400).json({
          deleted: false,
          errors: error.errors.map((err) => err.message),
        });
      }
      return res.status(500).json({
        deleted: false,
        errors: ['An unexpected error occurred.'],
      });
    }
  }

  async index(req, res) {
    try {
      const clients = await Client.findAll({
        attributes: [
          'id',
          'name',
          'email',
          'phonenumber',
          'cpf',
          'occupation',
          'marital_status',
          'literacy',
          'adress',
          'date_birth',
          'nacionality',
          'goal',
          'date_request',
        ],
        order: [['id', 'DESC']],
      });
      return res.json(clients);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not provided'] });
      }
      const client = await Client.findByPk(id, {
        attributes: [
          'id',
          'name',
          'email',
          'phonenumber',
          'cpf',
          'occupation',
          'marital_status',
          'literacy',
          'adress',
          'date_birth',
          'nacionality',
          'goal',
          'date_request',
        ],
        order: [['id', 'DESC']],
      });
      if (!client) {
        return res.status(400).json({ errors: ['Client not found'] });
      }
      return res.json(client);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not provided'] });
      }
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({ errors: ['Client not found'] });
      }
      const updatedMovie = await client.update(req.body);
      return res.json(updatedMovie);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new ClientController();
