// Arquivo responsável pela inserção de dados na tabela service_type
// Para definir os tipos de serviços que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'service_type',
    [
      {
        id: 1,
        description: 'Terapia',
      },
      {
        id: 2,
        description: 'Massagem',
      },
      {
        id: 3,
        description: 'Estética',
      },
    ],
    {},
  ),

  down: async () => {},
};
