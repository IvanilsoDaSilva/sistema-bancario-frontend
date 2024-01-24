import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { state } = useLocation();

    console.log(state)
    return (
      <>
        <ol>
          <ul>
            <a href="/account">Voltar</a>
          </ul>
        </ol>
        <ol>
          {state.cpf != null ? <><ul>Nome: {state.name}</ul>{/*<ul>CPF: {state.cpf}</ul><ul>RG: {state.rg}</ul><ul>Nascimento: {state.birth}</ul>*/}</> : ""}
          {state.cnpj != null ? <><ul>Razão social: {state.companyName}</ul>{/*<ul>CNPJ: {state.cnpj}</ul>*/}</> : ""}
          <ul>Agencia da conta: {state.agencyCode}</ul>
          <ul>Numero da conta: {state.number}</ul>
          <ul>Saldo da conta: {state.balance}</ul>
        </ol>
        <ol>
          <ul>
            <a href="">Sacar</a>
          </ul>
          <ul>
            <a href="">Depositar</a>
          </ul>
        </ol>
      </>
    );
  };
  
  export default Dashboard;
  