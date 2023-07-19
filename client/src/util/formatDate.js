// Função de formatação de data para o padrão brasileiro
const formatDate = (date) => {
  const d = new Date(date); // converte a data para o padrão UTC
  const year = d.getUTCFullYear(); // pega o ano
  const month = `0${d.getUTCMonth() + 1}`.slice(-2); // pega o mês
  const day = `0${d.getUTCDate()}`.slice(-2); // pega o dia
  const hour = `0${d.getUTCHours()}`.slice(-2); // pega a hora
  const minutes = `0${d.getUTCMinutes()}`.slice(-2); // pega os minutos
  const seconds = `0${d.getUTCSeconds()}`.slice(-2); // pega os segundos
  return `${day}/${month}/${year} as ${hour}:${minutes}:${seconds}`; // retorna a data formatada
};

export default formatDate;
