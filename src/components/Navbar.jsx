const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Pizzería Mamma Mia!</span>

        <div className="d-flex flex-wrap gap-2 ms-auto align-items-center">
          <button className="btn btn-outline-light btn-sm" type="button">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm" type="button">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light btn-sm" type="button">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm" type="button">
                🔐 Login
              </button>
              <button className="btn btn-outline-light btn-sm" type="button">
                🔐 Register
              </button>
            </>
          )}

          <button className="btn btn-success btn-sm" type="button">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
