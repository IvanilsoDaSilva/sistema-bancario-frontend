import { useCookies } from "react-cookie";

import avatar from './../assets/guest.png';

const Header = () => {
  const [cookies,] = useCookies(["user"]);

  return (
    <header className="my-section text-secondary bg-primary">
      <div className="flex items-center">
        <div className="flex items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
              <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
            </svg>
          </span>
          <a href="/"><h1 className="ml-2 text-3xl font-bold hover:underline">Sistema Bancario</h1></a>
        </div>

        <div className="ml-auto">
          <div className="flex items-center">
            {cookies.user != null ? (
              <span className="m-1 w-32 hover:underline truncate text-right">
                <a href="/account/dashboard">
                  {cookies.user.name && `${cookies.user.name}`}
                  {cookies.user.companyName && `${cookies.user.companyName}`}
                </a>
              </span>
             ) : (
              <span className="m-1 w-32 hover:underline truncate text-right">
                <a href="/account">
                  Guest User
                </a>
              </span>
            )}
            <img className="m-1 h-10 w-10 rounded-full" src={avatar} alt="Profile image"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
