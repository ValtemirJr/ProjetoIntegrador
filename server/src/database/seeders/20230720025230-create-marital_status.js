// Arquivo responsável pela inserção de dados na tabela de estados civis no banco de dados
// Para definir os tipos de estados civis que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'marital_status',
    [
      {
        id: 1,
        description: 'Solteiro(a)',
      },
      {
        id: 2,
        description: 'Casado(a)',
      },
      {
        id: 3,
        description: 'Divorciado(a)',
      },
      {
        id: 4,
        description: 'Viúvo(a)',
      },
      {
        id: 5,
        description: 'União Estável',
      },
    ],
    {},
  ),

  down: async () => {},
};
