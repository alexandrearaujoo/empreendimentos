import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws'
});
