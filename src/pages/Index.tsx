const Index = () => {
  return (
    <div className="flex flex-col min-h-[200px] space-y-5 my-page">
      <div className="flex items-center space-x-1">
        <span className="text-primary">/</span>
        <a href="/" className="my-link">Home </a>
      </div>
      <div className="flex space-x-2 h-full h-min-[200px]">
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
    </div>
  );
};

export default Index;
