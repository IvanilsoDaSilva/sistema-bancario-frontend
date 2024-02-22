import { useEffect, useState } from "react";
import { AdminPageData } from "../../api/SistemaBancarioBackend";

const Index = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getAdminPageData = async () => {
      try {
        const response = await AdminPageData();
        if (!response.ok) {
          throw new Error("Não conseguimos pegar os dados da API");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Erro ao buscar dados da página de administração:", err);
      }
    };

    getAdminPageData();
  }, []);

  return (
    <>
      <ol>
        <ul>
          <a href="/">Voltar</a>
        </ul>
      </ol>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Agência</th>
            <th>Saldo</th>
            <th>Nome</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.agencyCode}</td>
              <td>{user.balance}</td>
              {user.legalPersonId != null ? (
                <>
                  <td>{user.companyName}</td>
                  <td>{user.cnpj}</td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Index;
