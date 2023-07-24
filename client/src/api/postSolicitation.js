const baseUrl = process.env.REACT_APP_API_URL;

function postSolicitation(formData) {
  return fetch(`${baseUrl}/client`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((data) => {
        throw new Error(data.errors[0]);
      });
    }
    return response.json();
  });
}

export default postSolicitation;
