import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { CreateLegalPersonAccount } from "../../../api/SistemaBancarioBackend";

import { ILegalPersonAccount } from "../../../interfaces/LegalPersonAccount";
import InputField from "../../../components/Input";

const Create = () => {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await CreateLegalPersonAccount({
      companyName,
      cnpj,
      password,
      accountType,
      agencyCode,
    } as ILegalPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      response
        .json()
        .then((i) => navigate("/account/legal-person/read", { state: i }));
    }
  };

  return (
    <>
      <p>{httpStatus}</p>
      <ol>
        <ul>
          <a href="/account">Voltar</a>
        </ul>
      </ol>
      <form method="POST" onSubmit={handle}>
        <label htmlFor="razaoSocial">Razão Social: </label>
        <InputField
          type="text"
          name="companyName"
          value={companyName as string}
          onChange={(e: any) => setCompanyName(e.target.value)}
          required
        />

        <label htmlFor="cnpj">CNPJ: </label>
        <InputField
          type="text"
          name="cnpj"
          value={cnpj as string}
          onChange={(e: any) => setCnpj(e.target.value)}
          required
        />

        <label htmlFor="password">Senha: </label>
        <InputField
          type="password"
          name="password"
          value={password as string}
          onChange={(e: any) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="accountType">Tipo da conta:</label>
        <select
          name="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          required
        >
          <option value="CORRENTE">CORRENTE</option>
          <option value="POUPANCA">POUPANCA</option>
          <option value="PAGAMENTOS">PAGAMENTOS</option>
          <option value="UNIVERSITARIA">UNIVERSITARIA</option>
        </select>

        <label htmlFor="agencyCode">Código da agência: </label>
        <select
          name="agencyCode"
          value={agencyCode}
          onChange={(e) => setAgencyCode(e.target.value)}
          required
        >
          <option value="001">001</option>
          <option value="014">014</option>
          <option value="055">055</option>
          <option value="666">666</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Create;
