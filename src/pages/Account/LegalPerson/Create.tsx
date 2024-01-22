import { useState } from 'react';
import { CreateLegalPersonAccount } from '../../../api/SistemaBancarioBackend';
import { ILegalPersonAccount } from '../../../interfaces/LegalPersonAccount'

const Create = () => {
  const [razaoSocial, setRazaoSocial] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [password, setPassword] = useState("")
  const [accountType, setAccountType] = useState("CORRENTE")
  const [agencyCode, setAgencyCode] = useState("001")

  const CreateIndividualPersonAccountFunction = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    await CreateLegalPersonAccount({razaoSocial, cnpj ,password, accountType, agencyCode} as ILegalPersonAccount)
  }

  return (
    <form
      method='POST'
      onSubmit={CreateIndividualPersonAccountFunction}
    >
      <label htmlFor="razaoSocial">Razão Social: </label>
      <input type="text" name="razaoSocial" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}/>

      <label htmlFor="cnpj">CNPJ: </label>
      <input type="text" name="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>

      <label htmlFor="password">Senha: </label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <label htmlFor="accountType">Tipo da conta:</label>
      <select name="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
        <option value="CORRENTE">CORRENTE</option>
        <option value="POUPANCA">POUPANCA</option>
        <option value="PAGAMENTOS">PAGAMENTOS</option>
        <option value="UNIVERSITARIA">UNIVERSITARIA</option>
      </select>

      <label htmlFor="agencyCode">Código da agência: </label>
      <select name="agencyCode" value={agencyCode} onChange={(e) => setAgencyCode(e.target.value)}>
        <option value="001">001</option>
        <option value="014">014</option>
        <option value="055">055</option>
        <option value="666">666</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Create;
