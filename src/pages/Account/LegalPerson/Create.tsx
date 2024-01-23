import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { CreateLegalPersonAccount } from "../../../api/SistemaBancarioBackend";
import { ILegalPersonAccount } from "../../../interfaces/LegalPersonAccount";

const Create = () => {
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState<string|null>(null);
  const [cnpj, setCnpj] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");

  const CreateIndividualPersonAccountFunction = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();

    const response = await CreateLegalPersonAccount({
      companyName,
      cnpj,
      password,
      accountType,
      agencyCode,
    } as ILegalPersonAccount);
    setHttpStatus(response.status.toString())

    response.json().then(i => console.log(i))
    // if(response.status == 201) navigate('/')
  };

  return (
    <>
    <p>{httpStatus}</p>
      <form method="POST" onSubmit={CreateIndividualPersonAccountFunction}>
        <label htmlFor="razaoSocial">Razão Social: </label>
        <input
          type="text"
          name="companyName"
          value={companyName as string}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label htmlFor="cnpj">CNPJ: </label>
        <input
          type="text"
          name="cnpj"
          value={cnpj as string}
          onChange={(e) => setCnpj(e.target.value)}
        />

        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          name="password"
          value={password as string}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="accountType">Tipo da conta:</label>
        <select
          name="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
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
