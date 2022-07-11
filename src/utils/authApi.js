export const baseUrl = 'https://auth.nomoreparties.co';

export const register = () => {
 return fetch(`${baseUrl}/signup`, {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: {
    "password": "somepassword",//скорее всего надо JSON.stringfly({password, email})
    "email": "email@yandex.ru"
  }
})
}

export const authorize = () => {
  return fetch(`${baseUrl}/signin`, {
   method: 'POST',
   headers: {"Content-Type": "application/json"},
   body: {
    "password": "dsfsdfsdfsdf",
    "email": "email@email.ru"
   }
 })
}

export const getContent = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${ВАШ_ТОКЕН}`
    } ,
    body: {
      "password": "somepassword",
      "email": "email@yandex.ru"
    }
 })
}