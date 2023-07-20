import MaritalStatus from '../models/MaritalStatus';

class MaritalStatusController {
  // Lista todos os tipos de estado civil
  async index(req, res) {
    try {
      // Busca todos os tipos de estado civil em ordem decrescente pelo id
      const maritalStatus = await MaritalStatus.findAll({
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      // Retorna os dados dos tipos de estado civil
      return res.json(maritalStatus);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new MaritalStatusController();
