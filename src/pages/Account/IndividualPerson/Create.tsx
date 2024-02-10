import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InputField from "../../../components/Input";


import { CreateIndividualPersonAccount } from "../../../api/SistemaBancarioBackend";
import { IIndividualPersonAccount } from "../../../interfaces/IndividualPersonAccount";

const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [birth, setBirth] = useState<Date | null>(new Date());
  const [password, setPassword] = useState<string>("");
  const [accountType, setAccountType] = useState("CORRENTE");
  const [agencyCode, setAgencyCode] = useState("001");

  const [httpStatus, setHttpStatus] = useState("");


  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await CreateIndividualPersonAccount({
      name,
      cpf,
      rg,
      birth,
      password,
      accountType,
      agencyCode,
    } as IIndividualPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      response
        .json()
        .then((i) => navigate("/account/individual-person/read", { state: i }));
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

        <InputField
          type="text"
          value={name as string}
          placeholder="Digite o seu nome"
          label="Nome: "
          name="name"
          onChange={(e: any) => setName(e.target.value)}
        />

        <InputField
          type="text"
          value={cpf as string}
          placeholder="000.000.000-00"
          label="CPF: "
          name="cpf"
          onChange={(e: any) => setCpf(e.target.value)}
        />

        <InputField
          type="text"
          value={rg as string}
          placeholder="00.000.000-0"
          label="RG: "
          name="rg"
          onChange={(e: any) => setRg(e.target.value)}
        />

        <InputField
          type="date"
          value={birth as unknown as string}
          placeholder="00.000.000-0"
          label="Nascimento: "
          name="birth"
          onChange={(e: any) => setBirth(e.target.value as unknown as Date)}
        />

        <InputField
          type="password"
          value={password as string}
          placeholder="Digite sua senha"
          label="Senha: "
          name="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <label htmlFor="accountType">Tipo da conta:</label>
        <select
          name="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)} required
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
