export interface IPersonAccount {
  id: string;

  companyName: string;
  cnpj: string;

  name: string;
  cpf: string;
  rg: string;
  birth: Date;

  balance: number;
  password: string;
  accountType: string;
  agencyCode: string;
}
