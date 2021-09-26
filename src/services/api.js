import axios from "axios";

const api = axios.create({
  baseURL: 'https://server-tabata.herokuapp.com',
});

export default api;