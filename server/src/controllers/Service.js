import Service from '../models/Service';

class ServiceController {
  // Cria um novo usuário no banco de dados e retorna os dados do usuário criado
  // o body deve conter name, email e password
  async create(req, res) {
    try {
      const service = await Service.create(req.body);
      return res.status(200).json(service);
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Service was not created' });
    }
  }

  async delete(req, res) {
    try {
      const service = await Service.findByPk(req.params.id);
      if (!service) {
        return res.status(400).json({
          errors: ['Service not found'],
        });
      }
      await service.destroy();
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
      const service = await Service.findAll();
      return res.json(service);
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
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(400).json({ errors: ['Service type not found'] });
      }
      return res.json(service);
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
      const service = await Service.findByPk(id);
      if (!service) {
        return res.status(400).json({ errors: ['Service type not found'] });
      }
      const updatedMovie = await service.update(req.body);
      return res.json(updatedMovie);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new ServiceController();
