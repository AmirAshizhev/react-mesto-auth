export const baseUrl = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password})
  })
  .then((response => response.json()))

}

export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
   method: 'POST',
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify({ email, password})
 })
 .then((response => response.json()))

};


export const getContent = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    } ,
    body: {
      "password": "somepassword",
      "email": "email@yandex.ru"
    }
 })
}