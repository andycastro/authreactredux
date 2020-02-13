import axios from 'axios';

const api = axios.create({
  baseURL: '',
  //baseURL: 'https://reqres.in/api/', 
  //teste api email: eve.holt@reqres.in 
  //Pass: cityslicka - alterar os campos de signin para email ao inves de username
});

export default api;
