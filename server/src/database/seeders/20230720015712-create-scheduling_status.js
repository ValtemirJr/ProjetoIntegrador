// Arquivo responsável pela inserção de dados na tabela service_type
// Para definir os tipos de serviços que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'scheduling_status',
    [
      {
        id: 1,
        description: 'Confirmado',
      },
      {
        id: 2,
        description: 'Cancelado',
      },
      {
        id: 3,
        description: 'Realizado',
      },
    ],
    {},
  ),

  down: async () => {},
};
