import "./css/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Account from "./pages/Account/Index";
import IndividualPersonAccount from "./pages/Account/IndividualPerson/Index";
import LegalPersonAccount from "./pages/Account/LegalPerson/Index";
import IndividualPersonAccountCreate from "./pages/Account/IndividualPerson/Create";
import IndividualPersonAccountRead from "./pages/Account/IndividualPerson/Read";
import LegalPersonAccountCreate from "./pages/Account/LegalPerson/Create";
import LegalPersonAccountRead from "./pages/Account/LegalPerson/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/account/individual-person/"
            element={<IndividualPersonAccount />}
          />
          <Route
            path="/account/legal-person/"
            element={<LegalPersonAccount />}
          />
          <Route
            path="/account/individual-person/create"
            element={<IndividualPersonAccountCreate />}
          />
          <Route
            path="/account/individual-person/read"
            element={<IndividualPersonAccountRead />}
          />
          <Route
            path="/account/legal-person/create"
            element={<LegalPersonAccountCreate />}
          />
          <Route
            path="/account/legal-person/read"
            element={<LegalPersonAccountRead />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
