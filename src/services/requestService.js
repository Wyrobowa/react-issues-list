export const fetchData = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => resolve(data.data))
    .catch((error) => reject(error));
});

export const sendData = (url, formData, method) => new Promise((resolve, reject) => {
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => resolve(data.data))
    .catch((error) => reject(error));
});
