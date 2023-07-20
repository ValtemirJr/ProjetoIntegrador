import SchedulingStatus from '../models/SchedulingStatus';

class SchedulingStatusController {
  // Lista todos os status de agendamento
  async index(req, res) {
    try {
      const scheduling = await SchedulingStatus.findAll();
      return res.json(scheduling);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SchedulingStatusController();
