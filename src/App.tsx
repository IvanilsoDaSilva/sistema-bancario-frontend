import './css/App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account/Account'
import IndividualPersonAccountCreate from './pages/Account/IndividualPerson/Create'
import LegalPersonAccountCreate from './pages/Account/LegalPerson/Create'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/individual-person/create' element={<IndividualPersonAccountCreate />} />
          <Route path='/account/legal-person/create' element={<LegalPersonAccountCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
