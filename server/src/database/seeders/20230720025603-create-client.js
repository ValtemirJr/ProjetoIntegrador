// Arquivo responsável pela inserção de dados na tabela service_type
// Para definir os tipos de serviços que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'client',
    [
      {
        name: 'Edgar Codd',
        email: 'edgar@codd.com',
        phonenumber: '80608060',
        goal: 'Melhorar meu relacionamento',
        nacionality_id: null,
        cpf: '12345678901',
        date_request: '2021-07-20 00:00:00',
      },
      {
        name: 'Jon von Neumann',
        email: 'jon@von-neumann.com',
        phonenumber: '3264128',
        goal: 'Aprimorar minha memória',
        nacionality_id: null,
        cpf: '98765432109',
        date_request: '2021-07-20 00:00:00',
      },
      {
        name: 'Thomas H. Cormen',
        email: 'thomas@cormen.com',
        phonenumber: '3264128',
        goal: 'Quero menos complexidade e mais eficiencia',
        nacionality_id: null,
        cpf: '4569134864',
        date_request: '2021-07-20 00:00:00',
      },
    ],
    {},
  ),

  down: async () => {},
};
