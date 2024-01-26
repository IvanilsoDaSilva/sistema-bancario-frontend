import { useLocation } from 'react-router-dom';

const Read = () => {
    const { state } = useLocation();

    return (
      <>
        <ol>
          <ul>
            <a href="/account/individual-person/create">Voltar</a>
          </ul>
          <ul>
            <a href="/account">Login</a>
          </ul>
        </ol>
        <ol>
          <ul>Nome: {state.name}</ul>
          <ul>CPF: {state.cpf}</ul>
          <ul>RG: {state.rg}</ul>
          <ul>Nascimento: {state.birth}</ul>
          <ul>Numero da conta: {state.number}</ul>
        </ol>
      </>
    );
  };
  
  export default Read;
  