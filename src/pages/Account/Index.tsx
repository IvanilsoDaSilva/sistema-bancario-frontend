import { useState } from "react";
import { LoginAccount } from "../../api/SistemaBancarioBackend";
import { ILoginAccount } from "../../interfaces/LoginAccount";

const Index = () => {
  const [number, setNumber] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);

  const [httpStatus, setHttpStatus] = useState("");

  const CreateIndividualPersonAccountFunction = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();

    await LoginAccount({
      number,
      password,
    } as ILoginAccount).then(e => setHttpStatus(e.status.toString()));
  };

  return (
    <>
      <p>{httpStatus}</p>
      <ol>
        <ul>
          <a href="/account/individual-person/create">Criar uma conta pessoal</a>
        </ul>
        <ul>
          <a href="/account/legal-person/create">Criar uma conta de empresarial</a>
        </ul>
      </ol>
      <form method="POST" onSubmit={CreateIndividualPersonAccountFunction}>
        <label htmlFor="number">Numero da conta: </label>
        <input
          type="text"
          name="cpf"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Index;

