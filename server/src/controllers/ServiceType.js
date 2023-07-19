import ServiceType from '../models/ServiceType';

class ServiceTypeController {
  // Cria um tipo de serviço para utilizar no serviço
  async create(req, res) {
    try {
      // Cria um tipo de serviço no banco de dados e retorna os dados do tipo de serviço criado
      const serviceType = await ServiceType.create(req.body);
      // Retorna os dados do tipo de serviço criado
      const { id, description } = serviceType;
      return res.status(200).json({ id, description });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Descrição não foi criada' });
    }
  }

  // Deleta um tipo de serviço
  async delete(req, res) {
    try {
      // Busca o tipo de serviço pelo id passado na requisição pelo parâmetro da rota url
      const servicesType = await ServiceType.findByPk(req.params.id);
      if (!servicesType) {
        return res.status(400).json({
          errors: ['Serviço não encontrado'],
        });
      }
      // Deleta o tipo de serviço
      await servicesType.destroy();
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

  // Lista todos os tipos de serviço
  async index(req, res) {
    try {
      // Busca todos os tipos de serviço em ordem decrescente pelo id
      const servicesType = await ServiceType.findAll({
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      // Retorna os dados dos tipos de serviço
      return res.json(servicesType);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Lista um tipo de serviço
  async show(req, res) {
    try {
      // Pega o id no parâmetro da rota
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não providenciado'] });
      }
      // Busca o tipo de serviço pelo id
      const servicesType = await ServiceType.findByPk(id, {
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      if (!servicesType) {
        return res.status(400).json({ errors: ['Tipo de serviço não encontrado'] });
      }
      return res.json(servicesType);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Atualiza um tipo de serviço
  async update(req, res) {
    try {
      // Pega o id no parâmetro da rota
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não providenciado'] });
      }
      // Busca o tipo de serviço pelo id
      const servicesType = await ServiceType.findByPk(id);
      if (!servicesType) {
        return res.status(400).json({ errors: ['Tipo de serviço não encontrado'] });
      }
      // Atualiza o tipo de serviço e retorna os dados dele atualizados
      const updatedServiceType = await servicesType.update(req.body);
      return res.json(updatedServiceType);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new ServiceTypeController();
