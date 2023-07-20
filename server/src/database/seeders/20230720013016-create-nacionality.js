// Arquivo responsável pela inserção de dados na tabela service_type
// Para definir os tipos de serviços que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'nacionality',
    [
      {
        id: 1,
        description: 'Brasileiro',
      },
      {
        id: 2,
        description: 'Mexicano',
      },
      {
        id: 3,
        description: 'Austrialiano',
      },
    ],
    {},
  ),

  down: async () => {},
};
