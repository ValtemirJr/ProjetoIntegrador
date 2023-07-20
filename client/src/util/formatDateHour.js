function formatDateHour(text) {
  // Expressão regular para extrair os valores de data e hora do texto
  const regex = /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/;

  // Verifica se o texto corresponde à expressão regular
  const match = text.match(regex);

  if (match) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    const hour = match[4];
    const minute = match[5];
    const second = match[6];

    // Formata a data no formato dd/mm/yyyy HH:mm:ss
    const formattedDate = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    return formattedDate;
  }

  // Se o texto não corresponder à expressão regular, retorna o próprio texto
  return text;
}

export default formatDateHour;
