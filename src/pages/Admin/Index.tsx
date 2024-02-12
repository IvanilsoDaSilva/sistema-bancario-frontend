import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Index = () => {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch(baseURL + '/account/read-all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.agencyCode}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Index;
