const bcryptjs = require('bcryptjs');

// Popula a tabela users com os dados abaixo
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Ana Carolina de Lima Marsango',
        email: 'cetac.controle@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        user_type: 'S',
      },
      {
        name: 'Adelina Soares de Lima',
        email: 'adelinasmo@hotmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        user_type: 'T',
      },
    ],
    {},
  ),

  down: async () => {},
};
