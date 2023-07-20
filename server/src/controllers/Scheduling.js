import Scheduling from '../models/Scheduling';

class SchedulingController {
  // Cria um agendamento
  async create(req, res) {
    try {
      // Cria a data em que o cliente solicitou o agendamento
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000).toUTCString();
      req.body.date_request = date;
      req.body.status_id = 1;
      const scheduling = await Scheduling.create(req.body);
      return res.status(200).json(scheduling);
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'Agendamento não foi criado' });
    }
  }

  // Deleta um agendamento pelo id do parâmetro da rota url
  async delete(req, res) {
    try {
      const scheduling = await Scheduling.findByPk(req.params.id);
      if (!scheduling) {
        return res.status(400).json({
          errors: ['Agendamento não encontrado'],
        });
      }
      await scheduling.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'Agendamento deletado',
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

  // Lista todos os agendamentos
  async index(req, res) {
    try {
      const scheduling = await Scheduling.findAll();
      return res.json(scheduling);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Lista um agendamento pelo id do parâmetro da rota url
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      const scheduling = await Scheduling.findByPk(id);
      if (!scheduling) {
        return res.status(400).json({ errors: ['Tipo de agendamento não encontrado'] });
      }
      return res.json(scheduling);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Atualiza um agendamento pelo id do parâmetro da rota url
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      const scheduling = await Scheduling.findByPk(id);
      if (!scheduling) {
        return res.status(400).json({ errors: ['Tipo de agendamento não encontrado'] });
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
