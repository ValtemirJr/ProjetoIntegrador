// Formata o valor preço para real
const formatPrice = (price) => {
  // Remove tudo o que não é dígito
  const priceNumbers = price.replace(/\D/g, '');
  // Formata o número como R$ XX.XXX,XX
  return `R$ ${priceNumbers.slice(0, -2)},${priceNumbers.slice(-2)}`;
};

export default formatPrice;
