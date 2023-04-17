const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  }).then((res) => checkResponse(res))
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  }).then((res) => checkResponse(res))
    .then((res) => {
      localStorage.setItem("token", res.token);
      return res;
  })
};

export const getEmail = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  }).then((res) => checkResponse(res))
}