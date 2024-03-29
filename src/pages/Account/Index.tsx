import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LoginAccount } from "../../api/SistemaBancarioBackend";

import { ILoginAccount } from "../../interfaces/LoginAccount";
import InputField from "../../components/Input";

const Index = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [httpStatus, setHttpStatus] = useState("");

  const [, setCookie, removeCookie] = useCookies(["user"]);

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await LoginAccount({
      number,
      password,
    } as ILoginAccount);
    setHttpStatus(response.status.toString());
    if (response.status == 201) {
      removeCookie("user", { path: "/" });

      response.json().then((i) => {
        setCookie("user", i, { path: "/" });
        navigate("/account/dashboard");
      });
    }
  };

  return (
    <>
      <p>{httpStatus}</p>
      <ol>
        <ul>
          <a href="/">Voltar</a>
        </ul>
        <ul>
          <a href="/account/individual-person/create">
            Criar uma conta pessoal
          </a>
        </ul>
        <ul>
          <a href="/account/legal-person/create">
            Criar uma conta de empresarial
          </a>
        </ul>
      </ol>
      <form method="POST" onSubmit={handle}>
        <label htmlFor="number">Numero da conta: </label>
        <InputField
          type="text"
          name="number"
          value={number as string}
          onChange={(e: any) => setNumber(e.target.value)}
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

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Index;
