import axios from 'axios';

//const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: 'https://site-pessoal-api-0f6p.onrender.com/api'
    //baseURL: 'https://json-server-ex-gq2u.onrender.com',
    //baseURL: 'http://localhost:5000/api'
});

export default api;

