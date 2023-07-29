import { z } from 'zod';

const addressSchema = z.object({
  district: z.string(),
  city: z.string(),
  street: z.string(),
  state: z.string(),
  number: z.string().min(1, 'Minimo de 1 caracter'),
  cep: z.string().min(1, 'Minimo de 1 caracter')
});

export const createEnterpriseSchema = z.object({
  status: z.string(),
  name: z.string().min(1, 'Minimo de 1 caracter'),
  purpose: z.string(),
  address: addressSchema
});

export type EnterpriseRequest = z.infer<typeof createEnterpriseSchema>;
