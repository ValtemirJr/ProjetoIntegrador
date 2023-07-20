// Formata o valor do tipo de status de agenda para aparecer a descrição dele
// 1 - Confirmado
// 2 - Cancelado
// 3 - Realizado
const formatStatusId = (statusId) => {
  switch (statusId) {
    case 1:
      return 'Confirmado';
    case 2:
      return 'Cancelado';
    case 3:
      return 'Realizado';
    default:
      return '';
  }
};

export default formatStatusId;
