import ServiceType from '../models/ServiceType';

class ServiceTypeController {
  // Cria um novo usuário no banco de dados e retorna os dados do usuário criado
  // o body deve conter name, email e password
  async create(req, res) {
    try {
      const serviceType = await ServiceType.create(req.body);
      const { id, description } = serviceType;
      return res.status(200).json({ id, description });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Description was not created' });
    }
  }

  async delete(req, res) {
    try {
      const servicesType = await ServiceType.findByPk(req.params.id);
      if (!servicesType) {
        return res.status(400).json({
          errors: ['Service not found'],
        });
      }
      await servicesType.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'Service deleted',
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
      const servicesType = await ServiceType.findAll({
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      return res.json(servicesType);
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
      const servicesType = await ServiceType.findByPk(id, {
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      if (!servicesType) {
        return res.status(400).json({ errors: ['Service type not found'] });
      }
      return res.json(servicesType);
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
      const servicesType = await ServiceType.findByPk(id);
      if (!servicesType) {
        return res.status(400).json({ errors: ['Service type not found'] });
      }
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
