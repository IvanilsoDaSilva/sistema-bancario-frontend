import { ILoginAccount } from "../interfaces/LoginAccount";
import { IIndividualPersonAccount } from "../interfaces/IndividualPersonAccount";
import { ILegalPersonAccount } from "../interfaces/LegalPersonAccount";
import { IPersonAccount } from "../interfaces/PersonAccount";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const LoginAccount = async (
  LoginAccount: ILoginAccount
): Promise<Response> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(baseURL + "/account/login", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(LoginAccount),
  });
};

export const DepositAccount = async (
  Deposit: IPersonAccount
): Promise<Response> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(baseURL + "/account/deposit", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(Deposit),
  });
};

export const WithdrawAccount = async (
  Deposit: IPersonAccount
): Promise<Response> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(baseURL + "/account/withdraw", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(Deposit),
  });
};

export const CreateIndividualPersonAccount = async (
  individualPersonAccount: IIndividualPersonAccount
): Promise<Response> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(baseURL + "/account/individual-person/create", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(individualPersonAccount),
  });
};

export const CreateLegalPersonAccount = async (
  legalPersonAccount: ILegalPersonAccount
): Promise<Response> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(baseURL + "/account/legal-person/create", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(legalPersonAccount),
  });
};
