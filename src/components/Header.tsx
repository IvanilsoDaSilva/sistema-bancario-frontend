import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [cookies, , removeCookie] = useCookies(["user"]);

  return (
    <>
      {cookies.user != null ? (
        <>
          <a href="/account/dashboard">
            {cookies.user.name}
            {cookies.user.companyName}
          </a>
          <button
            onClick={() => {
              removeCookie("user", { path: "/" });
              navigate("/account");
            }}
          >
            Deslogar
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
