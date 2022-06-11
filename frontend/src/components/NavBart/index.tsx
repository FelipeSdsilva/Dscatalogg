const NavBar = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <nav className="navbar navbar-expand-md py-3 navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">DsCatalog</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;