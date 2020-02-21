import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
  //baseURL: 'https://reqres.in/api/', 
  //teste api email: eve.holt@reqres.in 
  //Pass: cityslicka - alterar os campos de signin para email ao inves de username
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Autorization = `Bearer ${token}`;
  }

  return { ...config, headers };

})

export default api;
