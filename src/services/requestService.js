// Helpers
import { changeURL } from '../helpers/Helpers';

export const fetchData = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => resolve(data.data))
    .catch((error) => reject(error));
});

export const sendData = (url, formData, history) => new Promise((resolve, reject) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data.data);
      changeURL(history, '/');
    })
    .catch((error) => reject(error));
});

export const updateData = (url, formData) => new Promise((resolve, reject) => {
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data.data);
      // changeURL(history, '/');
    })
    .catch((error) => reject(error));
});
