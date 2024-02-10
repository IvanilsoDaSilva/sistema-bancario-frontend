import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookies] = useCookies(["user"]);

  return (
    <>
      <ol>
        <ul>
          <a href="/account">Voltar</a>
        </ul>
      </ol>
      <ol>
        {
          cookies.user.cpf != null && (
            <ul>Nome: {cookies.user.name}</ul>
          )
        }
        {
          cookies.user.cnpj != null && (
            <ul>Razão social: {cookies.user.companyName}</ul>
          )
        }

        <ul>Agencia da conta: {cookies.user.agencyCode}</ul>
        <ul>Numero da conta: {cookies.user.number}</ul>
        <ul>Saldo da conta: R$ {cookies.user.balance}</ul>
      </ol>
      <ol>
        <ul>
          <a href="/account/withdraw ">Sacar</a>
        </ul>
        <ul>
          <a href="/account/deposit">Depositar</a>
        </ul>
        <ul>
          <a href="/account/transfer">Transferir</a>
        </ul>
      </ol>
    </>
  );
};

export default Dashboard;
