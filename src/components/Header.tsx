import { useState } from "react";
import { Link } from "react-router-dom";
import RecipeSearch from "./RecipeSearch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { key: 1, label: "Home", url: "/" },
    // { key: 2, label: "Categories", url: "/" },
    { key: 3, label: "Recipes", url: "/recipes" },
    // { key: 4, label: "Contact", url: "/" },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand" to="/">
        <img src="/logo.png" className="app-logo" alt="logo" />
      </Link>

      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-lg-end ${isOpen ? "show shadow-sm px-4" : ""} `}
        id="navbarSupportedContent"
      >
        <form className="form-inline d-lg-none my-4">
          <RecipeSearch />
        </form>
        <ul className="navbar-nav mr-auto gap-3">
          {links.map((link) => (
            <li className="nav-item active">
              <Link className="nav-link fw-500" to={link.url}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <form className="form-inline d-none d-lg-flex ms-4">
        <RecipeSearch />
      </form>
    </nav>
  );
};

export default Header;
