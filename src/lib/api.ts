import axios from "axios";

export const api = axios.create({
  baseURL: "",
});

export const viaCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
