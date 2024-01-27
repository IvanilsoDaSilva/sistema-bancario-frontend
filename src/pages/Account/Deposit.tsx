import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Deposit } from "../../api/SistemaBancarioBackend";

import { IPersonAccount } from "../../interfaces/PersonAccount";

const Index = () => {
  const navigate = useNavigate();

  const [balance, setBalance] = useState<number | null>(null);

  const [httpStatus, setHttpStatus] = useState("");

  const [cookies, setCookie] = useCookies(["user"]);

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await Deposit({
      id: cookies.user.id,
      balance,
    } as IPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      navigate("/account/dashboard");
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (cookies.user != null && cookies.user.id != null) {
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <>
      <p>{httpStatus}</p>
      <ol>
        <ul>
          <a href="/account/dashboard">Voltar</a>
        </ul>
      </ol>
      <form method="POST" onSubmit={handle}>
        <label htmlFor="namber">Valor: </label>
        <input
          type="number"
          name="balance"
          value={balance as number}
          onChange={(e) => setBalance(e.target.value as unknown as number)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Index;
