const Index = () => {
  return (
    <>
      <div className="flex-grow min-h-[200px] flex space-x-2 my-section">
        {/* <ol>
          <ul>
            <a href="/account">Área do cliente</a>
          </ul>
          <ul>
            <a href="/admin">Área do administrador</a>
          </ul>
        </ol> */}
        <a
          href="/account"
          className="bg-admin bg-cover bg-center flex-grow hover:w-1/3"
        >
          <div className="">
            <div className="bg-tertiary/50 text-secondary">admin</div>
          </div>
        </a>

        <a
          href="/admin"
          className="bg-client bg-cover bg-center flex-grow hover:w-1/3"
        >
          <div className="bg-tertiary/50 text-secondary">client</div>
        </a>
      </div>
    </>
  );
};

export default Index;
