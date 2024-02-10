import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IPersonAccount } from "../../interfaces/PersonAccount";
import { TransferAccount } from "../../api/SistemaBancarioBackend";
import InputField from "../../components/Input";


const Transfer = () => {
  const navigate = useNavigate();

  const [balance, setBalance] = useState<number | null>(null);
  const [account, setAccount] = useState<String | null>(null);

  const [httpStatus, setHttpStatus] = useState("");
  const [cookies] = useCookies(["user"]);

  const handle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await TransferAccount({
      id: cookies.user.id,
      target: account,
      balance: balance
    } as IPersonAccount);
    setHttpStatus(response.status.toString());

    if (response.status == 201) {
      navigate("/account/dashboard");
    }
  };
  return (
    <>
      <p>{httpStatus}</p>
      <ol>
        <ul>
          <a href="/account/dashboard">Voltar</a>
        </ul>
      </ol>
      <form method="POST" onSubmit={handle}>

        <label htmlFor="account">Conta: </label>
        <InputField
          type="string"
          name="account"
          value={account as String}
          onChange={(e: any) => setAccount(e.target.value as String)}
          required
        />

        <label htmlFor="balance">Valor: </label>
        <InputField
          type="number"
          name="balance"
          value={balance as number}
          onChange={(e: any) => setBalance(e.target.value as unknown as number)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Transfer;
