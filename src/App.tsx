import "./css/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Account from "./pages/Account/index";
import Login from "./pages/Account/Login";
import IndividualPersonAccount from "./pages/Account/IndividualPerson/index";
import LegalPersonAccount from "./pages/Account/LegalPerson/Index";
import IndividualPersonAccountCreate from "./pages/Account/IndividualPerson/Create";
import LegalPersonAccountCreate from "./pages/Account/LegalPerson/Create";

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
            path="/account/legal-person/create"
            element={<LegalPersonAccountCreate />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
