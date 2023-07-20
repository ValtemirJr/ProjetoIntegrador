// Arquivo responsável pela inserção de dados na tabela de nacionalidades no banco de dados
// Para definir os tipos de nacionalidade que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'nacionality',
    [
      {
        id: 1,
        description: 'Brasileiro nato',
      },
      {
        id: 2,
        description: 'Brasileiro naturalizado',
      },
      {
        id: 3,
        description: 'Dupla ou múltipla nacionalidade',
      },
      {
        id: 4,
        description: 'Perda da nacionalidade',
      },
      {
        id: 5,
        description: 'Estrangeiro',
      },
    ],
    {},
  ),

  down: async () => {},
};
