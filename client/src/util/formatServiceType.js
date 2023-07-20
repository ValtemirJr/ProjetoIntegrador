// Formata o valor do tipo de serviço para aparecer a descrição dele
// 1 - Terapia
// 2 - Massagem
// 3 - Estética
const formatServiceType = (serviceType) => {
  switch (serviceType) {
    case 1:
      return 'Terapia';
    case 2:
      return 'Massagem';
    case 3:
      return 'Estética';
    default:
      return '';
  }
};

export default formatServiceType;
