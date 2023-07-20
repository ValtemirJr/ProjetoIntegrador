// Arquivo responsável pela inserção de dados na tabela service_type
// Para definir os tipos de serviços que serão cadastrados no sistema
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'service',
    [
      {
        id: 1,
        description: 'Psicologia',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 2,
        description: 'Acupuntura',
        service_type_id: 1,
        price: 150.00,
      },
      {
        id: 3,
        description: 'Arte Terapia',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 4,
        description: 'Hipnose Clínica',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 5,
        description: 'Terapia',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 6,
        description: 'Reiki',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 7,
        description: 'Auriculoterapia',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 8,
        description: 'Electroacupuntura',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 9,
        description: 'Cone Hindu',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 10,
        description: 'Ventosaterapia',
        service_type_id: 1,
        price: 150.00,
      },
      {
        id: 11,
        description: 'iridologia',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 12,
        description: 'Florais de Bach',
        service_type_id: 1,
        price: 200.00,
      },
      {
        id: 13,
        description: 'Cromoterapia',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 14,
        description: 'Aromaterapia',
        service_type_id: 1,
        price: 100.00,
      },
      {
        id: 15,
        description: 'Relaxante',
        service_type_id: 2,
        price: 120.00,
      },
      {
        id: 16,
        description: 'Drenagem',
        service_type_id: 2,
        price: 150.00,
      },
      {
        id: 17,
        description: 'Modeladora',
        service_type_id: 2,
        price: 150.00,
      },
      {
        id: 18,
        description: 'Bioenergética',
        service_type_id: 2,
        price: 200.00,
      },
      {
        id: 19,
        description: 'Com Conchas',
        service_type_id: 2,
        price: 250.00,
      },
      {
        id: 20,
        description: 'Com Bambu',
        service_type_id: 2,
        price: 250.00,
      },
      {
        id: 21,
        description: 'Mista',
        service_type_id: 2,
        price: 150.00,
      },
      {
        id: 22,
        description: 'Criofrequência',
        service_type_id: 3,
        price: 200.00,
      },
      {
        id: 23,
        description: 'Radiofrequência',
        service_type_id: 3,
        price: 200.00,
      },
      {
        id: 24,
        description: 'Acupuntura Facial',
        service_type_id: 3,
        price: 200.00,
      },
    ],
    {},
  ),

  down: async () => {},
};
