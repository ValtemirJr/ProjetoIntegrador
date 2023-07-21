// Arquivo responsável pela inserção de dados na tabela de clientes no banco de dados
// Para definir casos de solicitação de contato que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'client',
    [
      {
        name: 'Edgar Codd',
        email: 'edgar@codd.com',
        phonenumber: '(11) 3264-1289',
        goal: 'Melhorar meu relacionamento',
        nacionality_id: null,
        cpf: '12345678901',
        date_request: 'Fri, 21 Jul 2023 17:30:25 GMT',
      },
      {
        name: 'Jon von Neumann',
        email: 'jon@von-neumann.com',
        phonenumber: '(11) 32694-1289',
        goal: 'Aprimorar minha memória',
        nacionality_id: null,
        cpf: '98765432109',
        date_request: 'Fri, 21 Jul 2023 17:34:25 GMT',
      },
      {
        name: 'Thomas H. Cormen',
        email: 'thomas@cormen.com',
        phonenumber: '(11) 93264-1289',
        goal: 'Quero menos complexidade e mais eficiencia',
        nacionality_id: null,
        cpf: '45691348641',
        date_request: 'Fri, 17 Jul 2023 14:22:05 GMT',
      },
    ],
    {},
  ),

  down: async () => {},
};
