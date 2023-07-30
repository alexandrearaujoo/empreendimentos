export interface Address {
  uf: string;
  localidade: string;
  complemento: string;
  estado: string;
  logradouro: string;
  bairro: string;
  cep: string;
}

export interface Enterprise {
  id: number;
  name: string;
  purpose: string;
  status: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}
