import { useLocation } from 'react-router-dom';

const Read = () => {
    const { state } = useLocation();

    return (
      <>
        <ol>
          <ul>
            <a href="/account/legal-person/create">Voltar</a>
          </ul>
          <ul>
            <a href="/account">Login</a>
          </ul>
        </ol>
        <ol>
          <ul>Razão social: {state.companyName}</ul>
          <ul>CNPJ: {state.cnpj}</ul>
          <ul>Numero da conta: {state.number}</ul>
        </ol>
      </>
    );
  };
  
  export default Read;
  