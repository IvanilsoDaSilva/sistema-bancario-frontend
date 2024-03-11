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
          href="/admin"
          className="bg-admin my-index-select-button"
        >
          <div>
            <div className="my-index-select-button-title">admin</div>
          </div>
        </a>

        <a
          href="/account"
          className="bg-client my-index-select-button"
        >
          <div className="my-index-select-button-title">client</div>
        </a>
      </div>
    </>
  );
};

export default Index;
