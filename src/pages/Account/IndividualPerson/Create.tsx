import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import { CreateIndividualPersonAccount } from "../../../api/SistemaBancarioBackend";

import { IIndividualPersonAccount } from "../../../interfaces/IndividualPersonAccount";

const Create = () => {
  const navigate = useNavigate()
  
  const [name, setName] = useState<string|null>(null);
  const [cpf, setCpf] = useState<string|null>(null);
  const [rg, setRg] = useState<string|null>(null);
  const [birth, setBirth] = useState<Date | null>(new Date());
  const [password, setPassword] = useState<string|null>(null);
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");

  const handle = async (e: {preventDefault: () => void;}) => {
    e.preventDefault();

    const response = await CreateIndividualPersonAccount({name,cpf,rg,birth,password,accountType,agencyCode} as IIndividualPersonAccount);
    setHttpStatus(response.status.toString())

    if(response.status == 201) {
      response.json().then(i => navigate('/account/individual-person/read', {state: i}))
    }
    
  };

  return (
    <>
      <ol>
        <ul>
          <a href="/account">Voltar</a>
        </ul>
      </ol>
      <p>{httpStatus}</p>
      <form method="POST" onSubmit={handle}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          value={name as string}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="cpf">CPF: </label>
        <input
          type="text"
          name="cpf"
          value={cpf as string}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label htmlFor="rg">RG: </label>
        <input
          type="text"
          name="rg"
          value={rg as string}
          onChange={(e) => setRg(e.target.value)}
        />

        <label htmlFor="birth">Nascimento: </label>
        <input
          type="date"
          name="birth"
          value={birth as unknown as string}
          onChange={(e) => setBirth(e.target.value as unknown as Date)}
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
