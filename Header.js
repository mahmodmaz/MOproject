import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light   fixed-top">
        <div className="container">
          <h2>
            <Link className="navbar-brand" to={"/"}>
              MO Tech
            </Link>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to={"/types"} className="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li className="nav-item active">
                <Link to={"/add"} className="nav-link" href="#">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
