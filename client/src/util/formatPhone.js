// Função de formatação de telefone para o padrão brasileiro
const formatPhone = (phoneNumber) => {
  // Remove tudo o que não é dígito
  const phoneNumbers = phoneNumber.replace(/\D/g, '');
  // Verifica se o número de digitos é maior ou igual a 11
  const phoneLength = phoneNumbers.length;
  if (phoneLength < 3) {
    // Se o número de dígitos for menor que 3, retorna o próprio número
    return phoneNumbers;
  }
  // Se o número de dígitos for menor que 7, retorna o número formatado
  if (phoneLength < 7) {
    // Formata o número como (XX) XXXX-XXXX
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2)}`;
  }
  // Se o número de dígitos for menor que 11, retorna o número formatado
  if (phoneLength < 11) {
    // Formata o número como (XX) XXXXX-XXXX
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
      2,
      6,
    )}-${phoneNumbers.slice(6, 10)}`;
  }
  // Se o número de dígitos for maior que 11, retorna o número formatado
  // Formata o número como (XX) XXXXX-XXXX
  return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
    2,
    7,
  )}-${phoneNumbers.slice(7, 11)}`;
};

export default formatPhone;
