const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = `0${d.getUTCMonth() + 1}`.slice(-2);
  const day = `0${d.getUTCDate()}`.slice(-2);
  const hour = `0${d.getUTCHours()}`.slice(-2);
  const minutes = `0${d.getUTCMinutes()}`.slice(-2);
  const seconds = `0${d.getUTCSeconds()}`.slice(-2);
  return `${day}/${month}/${year} as ${hour}:${minutes}:${seconds}`;
};

export default formatDate;
