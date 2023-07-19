import Scheduling from '../models/Scheduling';

class SchedulingController {
  // Cria um agendamento
  async create(req, res) {
    try {
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000).toUTCString();
      req.body.date_request = date;
      const scheduling = await Scheduling.create(req.body);
      return res.status(200).json(scheduling);
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Scheduling was not created' });
    }
  }

  async delete(req, res) {
    try {
      const scheduling = await Scheduling.findByPk(req.params.id);
      if (!scheduling) {
        return res.status(400).json({
          errors: ['Scheduling not found'],
        });
      }
      await scheduling.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'Scheduling deleted',
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
      const scheduling = await Scheduling.findAll();
      return res.json(scheduling);
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
      const scheduling = await Scheduling.findByPk(id);
      if (!scheduling) {
        return res.status(400).json({ errors: ['Scheduling type not found'] });
      }
      return res.json(scheduling);
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
      const scheduling = await Scheduling.findByPk(id);
      if (!scheduling) {
        return res.status(400).json({ errors: ['Scheduling type not found'] });
      }
      const updatedScheduling = await scheduling.update(req.body);
      return res.json(updatedScheduling);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new SchedulingController();
