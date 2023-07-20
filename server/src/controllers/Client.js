import Client from '../models/Client';

class ClientController {
  // Cria uma solicitação de contato do cliente
  async create(req, res) {
    try {
      // Cria a data em que o cliente entrou em contato
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000).toUTCString();
      // Adiciona a data de solicitação ao corpo da requisição
      req.body.date_request = date;
      // Cria o cliente no banco de dados
      const client = await Client.create(req.body);
      // Retorna os dados do cliente criado
      const {
        id,
        name,
        email,
        phonenumber,
        goal,
        date_request,
        nacionality_id,
        marital_status_id,
      } = client;
      return res.status(200).json({
        id,
        name,
        email,
        phonenumber,
        goal,
        date_request,
        nacionality_id,
        marital_status_id,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Cliente não foi criado' });
    }
  }

  // Deleta um cliente
  async delete(req, res) {
    try {
      // Busca o cliente pelo id passado na requisição pelo parâmetro da rota url
      const client = await Client.findByPk(req.params.id);
      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não encontrado'],
        });
      }
      // Deleta o cliente
      await client.destroy();
      // Retorna uma mensagem de sucesso
      return res.status(200).json({
        deleted: true,
        message: 'Clienta deletado',
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
        errors: ['Erro interno no servidor'],
      });
    }
  }

  // Lista todos os clientes
  async index(req, res) {
    try {
      // Busca todos os clientes em ordem decrescente pelo id
      const clients = await Client.findAll({
        attributes: [
          'id',
          'name',
          'email',
          'phonenumber',
          'cpf',
          'occupation',
          'marital_status_id',
          'literacy',
          'address',
          'date_birth',
          'nacionality_id',
          'goal',
          'date_request',
        ],
        order: [['id', 'DESC']],
      });
      // Retorna os clientes
      return res.json(clients);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Lista um cliente
  async show(req, res) {
    try {
      // Busca o cliente pelo id passado na requisição pelo parâmetro da rota url
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não providenciado'] });
      }
      // Busca o cliente pelo id e retorna os dados
      const client = await Client.findByPk(id, {
        attributes: [
          'id',
          'name',
          'email',
          'phonenumber',
          'cpf',
          'occupation',
          'marital_status_id',
          'literacy',
          'address',
          'date_birth',
          'nacionality_id',
          'goal',
          'date_request',
        ],
        order: [['id', 'DESC']],
      });
      if (!client) {
        return res.status(400).json({ errors: ['Cliente não encontrado'] });
      }
      return res.json(client);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Atualiza um cliente
  async update(req, res) {
    try {
      // Busca o cliente pelo id passado na requisição pelo parâmetro da rota url
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não providenciado'] });
      }
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({ errors: ['Cliente não encontrado'] });
      }
      // Atualiza o cliente
      const updatedClient = await client.update(req.body);
      // Retorna os dados do cliente atualizado
      return res.json(updatedClient);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new ClientController();
