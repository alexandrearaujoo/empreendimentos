import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws'
});
