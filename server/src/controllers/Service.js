import Service from '../models/Service';

class ServiceController {
  // Cria um serviço para agendar
  async create(req, res) {
    // Cria o próximo id a ser inserido no banco de dados
    const nextId = await Service.max('id') + 1;
    // Adiciona o id no corpo da requisição
    req.body.id = nextId;
    try {
      // Cria um serviço no banco de dados e retorna os dados do serviço criado
      const service = await Service.create(req.body);
      return res.status(200).json(service);
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Serviço não foi criado' });
    }
  }

  // Deleta um serviço
  async delete(req, res) {
    try {
      // Busca o serviço pelo id passado na requisição pelo parâmetro da rota url
      const service = await Service.findByPk(req.params.id);
      if (!service) {
        return res.status(400).json({
          errors: ['Serviço não encontrado'],
        });
      }
      // Deleta o serviço
      await service.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'Serviço deletado',
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

  // Lista todos os serviços
  async index(req, res) {
    try {
      // Busca todos os serviços e retorna os dados deles
      const service = await Service.findAll();
      return res.json(service);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Lista um serviço
  async show(req, res) {
    try {
      // Pega o id no parâmetro da rota
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      // Busca o serviço pelo id
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(400).json({ errors: ['Serviço não encontrado'] });
      }
      // Retorna os dados do serviço
      return res.json(service);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Atualiza um serviço
  async update(req, res) {
    try {
      // Pega o id no parâmetro da rota
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      // Busca um serviço pelo id
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(400).json({ errors: ['Serviço não encontrado'] });
      }
      // Atualiza o serviço
      const updatedService = await service.update(req.body);
      return res.json(updatedService);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new ServiceController();
