import axios from 'axios';

/**
 * Instância Axios compartilhada.
 * TODO(api): apontar VITE_API_URL para o backend Spring Boot (ex.: http://localhost:8080/api)
 * e anexar o token JWT no interceptor de request.
 */
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
});
