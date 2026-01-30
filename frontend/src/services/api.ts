import axios from 'axios';

// Vite expõe variáveis que começam com VITE_ em import.meta.env
const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const api = axios.create({
    baseURL,
    timeout: 10000,
});

export default api;