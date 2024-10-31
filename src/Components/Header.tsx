function Header() {
  return (
    <header className=" bg-blue-500 text-white px-8 py-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <img src="/json-logo.png" alt="json logo" className="h-12 w-12" />
        <h2 className="text-2xl font-semibold tracking-wide">JSON Viewer</h2>
      </div>
    </header>
  );
}

export default Header;
