const formatPhone = (phoneNumber) => {
  const phoneNumbers = phoneNumber.replace(/\D/g, '');
  const phoneLength = phoneNumbers.length;
  if (phoneLength < 3) {
    return phoneNumbers;
  }
  if (phoneLength < 7) {
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2)}`;
  }
  if (phoneLength < 11) {
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
      2,
      6,
    )}-${phoneNumbers.slice(6, 10)}`;
  }
  return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
    2,
    7,
  )}-${phoneNumbers.slice(7, 11)}`;
};

export default formatPhone;
