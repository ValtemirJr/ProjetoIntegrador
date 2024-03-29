import Nacionality from '../models/Nacionality';

class NacionalityController {
  // Lista todos os tipos de nacionalidade
  async index(req, res) {
    try {
      // Busca todos os tipos de nacionalidade em ordem decrescente pelo id
      const servicesType = await Nacionality.findAll({
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });
      // Retorna os dados dos tipos de nacionalidade
      return res.json(servicesType);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new NacionalityController();
